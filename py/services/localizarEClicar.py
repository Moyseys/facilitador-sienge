import pyautogui
import time

def localizar_e_clicar(imagem, descricao):
    try:
        localizacao = pyautogui.locateCenterOnScreen(imagem, confidence=0.8)
        if localizacao:
            pyautogui.click(localizacao)
            print(f"{descricao} localizado e clicado.")
            time.sleep(1)
        else:
            print(f"{descricao} não encontrado.")
    except pyautogui.ImageNotFoundException as e:
        print(f"Imagem {descricao} não encontrada: {str(e)}, caminho: {imagem}\n")
    except Exception as e:
        print(f"Erro ao localizar e clicar em {descricao}: {str(e)}")