#!/bin/bash

echo "🔧 Hyoml Multi-Language Setup"
echo "Select a language to set up:"
echo "1) Python"
echo "2) JavaScript"
echo "3) Go (coming soon)"
echo "4) All available"
read -p "Enter choice [1-4]: " choice

setup_python() {
    echo "👉 Setting up Python..."
    cd python || exit
    if [ -f "setup.py" ]; then
        pip install -e .
    elif [ -f "pyproject.toml" ]; then
        pip install .
    fi
    cd ..
}

setup_js() {
    echo "👉 Setting up JavaScript..."
    cd javascript || exit
    if [ -f "package.json" ]; then
        npm install
    else
        echo "❌ package.json not found. Skipping JS setup."
    fi
    cd ..
}

setup_go() {
    echo "🚧 Go setup coming soon."
}

case $choice in
    1)
        setup_python
        ;;
    2)
        setup_js
        ;;
    3)
        setup_go
        ;;
    4)
        setup_python
        setup_js
        setup_go
        ;;
    *)
        echo "❌ Invalid option. Exiting."
        ;;
esac

echo "✅ Setup finished."

