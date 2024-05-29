import pyautogui
import time

print("Pressione Ctrl+C para parar o programa.")

try:
    while True:
        # Captura a posição atual do cursor
        x, y = pyautogui.position()
        
        # Exibe a posição do cursor
        print(f"A posição atual do cursor é: ({x}, {y})", end="\r")
        
        # Espera um pequeno intervalo antes de capturar novamente
        time.sleep(0.1)
except KeyboardInterrupt:
    print("\nPrograma interrompido pelo usuário.")
