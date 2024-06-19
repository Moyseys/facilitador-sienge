from pyautogui import printInfo
from  services.buscaCredor import buscarCredor
from  services.editarCredor import editarCredor
from services.getCellValue import get_cell_value
from services.edit_cell import edit_cell
from services.getCnpj import getCnpj
from services.get_cnpj_card import get_cnpj_card
import time
import os

# Exemplo de uso
# sheet = os.path.join(os.getcwd(), 'py', 'static', 'cadastro_de_credores.xlsx')
# sheet_name = 'Total credores'
# time.sleep(1)
 
# for i in range(100, 1000):
#     #Verefica se credor já foi atualizado
#     esta_atualizado = get_cell_value(sheet, sheet_name, "F", i)
#     if(esta_atualizado == "TRUE"):
#         razao_social = get_cell_value(sheet, sheet_name, "A", i)
#         resposta = input(f"O credor {razao_social} já foi atualizado, deseja continuar? (S/N): ")
#         if resposta.upper() != "S":
#             print("Bot encerrado!")
#             break
#         else:
#             time.sleep(5)
#             continue
    
#     razao_social = get_cell_value(sheet, sheet_name, "A", i)
#     numero = get_cell_value(sheet, sheet_name, "D", i)
#     email = get_cell_value(sheet, sheet_name, "E", i)

#     if(numero is None or email is None):
#         resposta = input(f"O credor {razao_social} não possui informações de contato validas, deseja continuar? (S/N): ")
#         if resposta.upper() != "S":
#             print("Bot encerrado!")
#             break
#         else:
#             time.sleep(5)

#     #Atualiza credor
#     print("=========================================")
#     print(f"Laço do loop: {i}")
#     print(f"Credor: {razao_social}")
#     print(f"Número: {numero}")
#     print(f"E-mail: {email}")

#     buscarCredor(razao_social)
#     # #Atualiza Tabela
#     editarCredor("Contato 1", numero, email)

#     edit_cell(sheet, sheet_name, "F", i, "TRUE")
#     print("=========================================")
#     time.sleep(1)

creditor_name = "Viviano"
buscarCredor(creditor_name)
creditor_cnpj = getCnpj()
creditor_card = get_cnpj_card(creditor_cnpj, creditor_name)

print(creditor_card)
print("Bot encerrado!")