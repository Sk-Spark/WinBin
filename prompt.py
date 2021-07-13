import pyautogui as pg

pr = 'function prompt {"$(Write-Host -NoNewline -ForegroundColor Green ( Split-Path (pwd) -Leaf ))> "}\n'

pg.write(pr)
pg.write("clear-host \n")