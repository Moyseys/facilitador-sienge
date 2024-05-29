import pyautogui

def buscarCredor(razaoSocial):
    cord_inputrazao_social = pyautogui.locateOnScreen('py\static\icons\inputRazaoSocial.png')
    print(cord_inputrazao_social)