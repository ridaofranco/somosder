#!/bin/bash
# Script para encontrar todas las referencias a useEffectEvent en el proyecto
find . -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useEffectEvent"
