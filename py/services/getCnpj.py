import requests
import json 
from requests.structures import CaseInsensitiveDict

def getCnpj(cnpj):
    url = f"https://publica.cnpj.ws/cnpj/{cnpj}"
    resp = requests.get(url)
    try:
        # Tenta converter a resposta para um objeto JSON
        data = resp.json()
        
        # Salvando o JSON em um arquivo
        with open('dados.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        
        print("Dados salvos em dados.json")
    except ValueError:
        print("A resposta não está em formato JSON")

