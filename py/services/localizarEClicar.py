import pyautogui
import time

def localizar_e_clicar(imagem, descricao):
    localizacao = pyautogui.locateCenterOnScreen(imagem, confidence=0.8)
    pyautogui.click(localizacao)
    print(f"{descricao} localizado e clicado.")
    time.sleep(1)
