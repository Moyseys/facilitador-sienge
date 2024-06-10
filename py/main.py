from pyautogui import printInfo
from  services.buscaCredor import buscarCredor
from  services.editarCredor import editarCredor
from services.getCellValue import get_cell_value
from services.edit_cell import edit_cell
import time
import os

# Exemplo de uso
sheet = os.path.join(os.getcwd(), 'py', 'static', 'cadastro_de_credores.xlsx')
sheet_name = 'Total credores'
# print(valor)
# edit_cell(file_path, sheet_name, "F", 2, "TRUE")
# valor = get_cell_value(file_path, sheet_name, "F", 2)
# print(valor)

time.sleep(3)
for i in range(2, 101):
    #Verefica se credor já foi atualizado
    esta_atualizado = get_cell_value(sheet, sheet_name, "F", i)
    if(esta_atualizado == "TRUE"):
        razao_social_atual = get_cell_value(sheet, sheet_name, "A", i)
        resposta = input(f"O credor {razao_social_atual} já foi atualizado, deseja continuar? (S/N): ")
        if resposta.upper() != "S":
            print("Bot encerrado!")
            break
        else:
            time.sleep(5)
            continue
    
    razao_social = get_cell_value(sheet, sheet_name, "A", i)
    numero = get_cell_value(sheet, sheet_name, "D", i)
    email = get_cell_value(sheet, sheet_name, "E", i)

    if(numero is not None and email is not None):
        resposta = input(f"O credor {razao_social_atual} não possui informações de contato validas, deseja continuar? (S/N): ")
        if resposta.upper() != "S":
            print("Bot encerrado!")
            break
        else:
            time.sleep(5)

    #Atualiza credor
    buscarCredor(razao_social)
    #Atualiza Tabela
    editarCredor("Contato 1", numero, email)

    edit_cell(sheet, sheet_name, "F", i, "TRUE")