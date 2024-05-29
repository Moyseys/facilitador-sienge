import pyautogui
import os

def buscarCredor(razaoSocial):
    try:
        icon_input_razao_social = os.path.join(os.getcwd(), 'py', 'static', 'icons', 'inputRazaoSocial.png')
        icon_input_razao_social = icon_input_razao_social.replace('\\', '/')
        print(icon_input_razao_social)


        cord_input_razao_social = pyautogui.locateOnScreen("C:/Users/MoyseysFerreiraVeron/Desktop/facilitador-sienge/py/static/icons/inputRazaoSocial.png")
        pyautogui.moveTo(cord_input_razao_social)
        pyautogui.click()
        pyautogui.write(razaoSocial)

        icon_btn_consultar = os.path.join(os.getcwd(), 'py', 'static', 'icons', 'btnConsultar.png')
        icon_btn_consultar = icon_input_razao_social.replace('\\', '/')
        cord_btn_consultar = pyautogui.locateOnScreen(icon_btn_consultar)
        pyautogui.moveTo(cord_btn_consultar)
        pyautogui.click()

    except pyautogui.ImageNotFoundException:
        print("A imagem não pôde ser encontrada na tela.")
    except Exception as e:
        print(f"Ocorreu um erro: {e}")
