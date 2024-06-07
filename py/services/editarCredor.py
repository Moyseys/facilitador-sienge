import pyautogui
import os
from .localizarEClicar import localizar_e_clicar


def editarCredor(numero, email):
    base_path = os.path.join(os.getcwd(), 'py', 'static', 'icons').replace('\\', '/')
    
    icon_btn_contato = os.path.join(base_path, 'bntContatos.png')
    localizar_e_clicar(icon_btn_contato, "icon_btn_contato")
    pyautogui.scroll(-900)
    icon_btn_adicionar = os.path.join(base_path, 'bntAdicionar.png')
    localizar_e_clicar(icon_btn_adicionar, "icon_btn_adicionar")
    pyautogui.press("tab")
    pyautogui.press("tab")
    pyautogui.write(numero)
    pyautogui.press("tab")