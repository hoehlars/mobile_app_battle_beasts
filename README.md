# mobile_app_battle_beasts

## Installationsguide um die Mobile App auf einem Android-Gerät (Windows) laufen zu lassen
1. Klone git repository
2. npm install
3. Füge ein File namens local.properties unter android/ hinzu und spezifiziere die Android SDK Location dort, falls die Android SDK nicht im Path gesetzt wurde.
   (Normalerweise Android SDK sieht wie folgt aus sdk.dir=C:\\Users\\*username*\\AppData\\Local\\Android\\sdk
4. Füge den adb command von der Android SDK zum Path hinzu. Dieser wird von react gebraucht, um angeschlossene Devices zu erkennen. Folgende Schritte ausführen:
  1. In der Windows-Suche nach "Systemumgebungsvariablen bearbeiten" suchen
  2. Unten recht auf "Umgebungsvariablen..." klicken
  3. Bei den Benutzervariablen (oberes Fenster) auf "Path" klicken und bearbeiten. 
     Dort folgendes einfügen (sollte sich standardmässig dort befinden): C:\Users\*username*\AppData\Local\Android\Sdk\platform-tools 
  4. Öffne eine cmd und versuche adb -devices (vllt. zuerst Handy anschliessen, damit dies angezeigt wird.
5. Nun sollte alles eingerichtet sein. Mit npm run android kannst du nun die App auf deinem Android Handy laufen lassen.
