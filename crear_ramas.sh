#!/bin/bash

# Lista de ramas con sus mensajes de commit
declare -A features=(
  ["onboarding"]="Añadir pantalla de Onboarding"
  ["autenticacion"]="Añadir pantallas de autenticación"
  ["dashboard"]="Añadir pantalla de Dashboard"
  ["mood-symptom-tracker"]="Añadir pantalla Mood & Symptom Tracker"
  ["health-tracking"]="Añadir pantalla de Health Tracking"
  ["journals"]="Añadir pantalla de Journals"
  ["mindfulness"]="Añadir pantalla de Mindfulness & Self-Help"
  ["objetivos-habitos"]="Añadir pantalla de Objetivos y Hábitos"
  ["estadisticas"]="Añadir pantalla de Estadísticas y Análisis"
  ["recordatorios"]="Añadir pantalla de Recordatorios y Alertas"
  ["biblioteca"]="Añadir pantalla de Biblioteca / Recursos"
  ["social"]="Añadir pantalla de Social / Comunidad"
  ["perfil-configuracion"]="Añadir pantalla de Perfil y Configuración"
)

# Recorre y crea cada rama
for branch in "${!features[@]}"; do
  git checkout main
  git checkout -b "feature/$branch"
  git add .
  git commit -m "${features[$branch]}"
  git push -u origin "feature/$branch"
done

# Volver a main al final
git checkout main
