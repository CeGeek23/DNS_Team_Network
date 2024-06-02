#!/bin/bash
# Récupère le SSID et le mot de passe à partir des arguments
ssid="$1"
password="$2"

# Vérifie si le Wi-Fi est déjà activé
if [[ $(nmcli radio wifi) == "enabled" ]]; then
    echo "Le Wi-Fi est déjà activé."
else
    # Active le Wi-Fi
    nmcli radio wifi on

    # Vérifie si le Wi-Fi a été activé avec succès
    if [[ $(nmcli radio wifi) == "enabled" ]]; then
        echo "Le Wi-Fi a été activé avec succès."
    else
        echo "Échec de l'activation du Wi-Fi."
        exit 1
    fi
fi

# Vérifie si le nombre d'arguments est correct
if [[ $# -ne 2 ]]; then
    echo "Nombre incorrect d'arguments. Veuillez spécifier le SSID et le mot de passe du point d'accès."
    exit 1
fi

# Demande à l'utilisateur de saisir le nom du point d'accès
#read -p "Veuillez entrer le nom du point d'accès : " connection_name

# Vérifie si le point d'accès existe déjà
if nmcli connection show --active | grep -q "$ssid"; then
    echo "Le point d'accès existe déjà."
else

    # Active le point d'accès avec le SSID, le mot de passe et le nom saisis par l'utilisateur
    
    nmcli device wifi hotspot con-name "$ssid" ssid "$ssid" password "$password" 
    # Vérifie si le point d'accès a été activé avec succès
    if nmcli connection show --active | grep -q "$ssid"; then
        echo "Le point d'accès a été activé avec succès."
       
    else
        echo "Échec de l'activation du point d'accès."
        exit 1
    fi
fi
