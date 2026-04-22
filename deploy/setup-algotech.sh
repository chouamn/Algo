#!/usr/bin/env bash
set -euo pipefail

: "${DB_PASS:?set DB_PASS}"
: "${SG_KEY:?set SG_KEY}"
: "${SG_FROM:?set SG_FROM}"
: "${ADMIN:?set ADMIN}"
: "${FRONTEND_ORIGIN:?set FRONTEND_ORIGIN}"

sudo mkdir -p /srv/algotech
if [ -f /tmp/algotech-api-0.0.1-SNAPSHOT.jar ]; then
  sudo mv /tmp/algotech-api-0.0.1-SNAPSHOT.jar /srv/algotech/app.jar
fi
sudo useradd --system --no-create-home --shell /usr/sbin/nologin algotech 2>/dev/null || true
sudo chown -R algotech:algotech /srv/algotech

MYSQL_UNIT="$(systemctl list-unit-files --type=service --no-legend 2>/dev/null \
  | awk '{print $1}' | grep -E '^(mysql|mariadb)\.service$' | head -n1)"
MYSQL_UNIT="${MYSQL_UNIT:-mysql.service}"
echo "Using database unit: ${MYSQL_UNIT}"

sudo tee /etc/systemd/system/algotech.service >/dev/null <<EOF
[Unit]
Description=Algotech Spring Boot API
After=network.target ${MYSQL_UNIT}
Requires=${MYSQL_UNIT}

[Service]
Type=simple
User=algotech
WorkingDirectory=/srv/algotech
Environment="DATABASE_URL=jdbc:mysql://localhost:3306/algotech?serverTimezone=UTC&useSSL=false&allowPublicKeyRetrieval=true"
Environment="DATABASE_USERNAME=algotech"
Environment="DATABASE_PASSWORD=${DB_PASS}"
Environment="SENDGRID_API_KEY=${SG_KEY}"
Environment="SENDGRID_FROM_EMAIL=${SG_FROM}"
Environment="ADMIN_EMAIL=${ADMIN}"
Environment="FRONTEND_ORIGIN=${FRONTEND_ORIGIN}"
Environment="PORT=8080"
ExecStart=/usr/bin/java -Xmx512m -jar /srv/algotech/app.jar
SuccessExitStatus=143
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

sudo chmod 644 /etc/systemd/system/algotech.service
sudo systemctl daemon-reload
sudo systemctl enable --now algotech

sleep 12
echo '=== status ==='
sudo systemctl status algotech --no-pager -l | head -25 || true
echo
echo '=== last 40 log lines ==='
sudo journalctl -u algotech -n 40 --no-pager || true
echo
echo '=== health ==='
curl -s -o /dev/stdout -w "\nHTTP %{http_code}\n" http://localhost:8080/api/v1/health || true
