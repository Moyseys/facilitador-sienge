import pyautogui
import time

def localizar_e_clicar(imagem, descricao):
    localizacao = pyautogui.locateCenterOnScreen(imagem, confidence=0.8)
    if(localizacao is not None):
        pyautogui.click(localizacao)
        print(f"{descricao} localizado e clicado.")
        time.sleep(1)
    else:
        localizacao = pyautogui.locateCenterOnScreen(imagem, confidence=0.7)
        pyautogui.click(localizacao)
        print(f"{descricao} localizado e clicado.")
        time.sleep(1)
