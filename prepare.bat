CALL npm install -g bower
CALL bower install
CALL npm install grunt --force
CALL npm install --force
CALL rmdir node_modules\jsql-cli /s /q
CALL rmdir node_modules\grunt-jsql /s /q
CALL rmdir node_modules\jsql-core /s /q
CALL rmdir node_modules\jsql-angular1 /s /q
CALL npm install --force