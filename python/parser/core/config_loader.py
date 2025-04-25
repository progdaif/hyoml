import yaml
from pathlib import Path
from typing import Dict


class ConfigLoader:
    """
    Loads the Hyoml configuration from `.hyoml` file.
    """

    @staticmethod
    def load(config_path: str = ".hyoml") -> Dict:
        """
        Load and parse the `.hyoml` configuration file.

        Args:
            config_path (str): Path to the config file (default: ".hyoml")

        Returns:
            dict: Parsed configuration options. Empty if file not found or invalid.
        """
        config_file = Path(config_path)
        if not config_file.exists():
            return {}

        try:
            with open(config_file, "r", encoding="utf-8") as f:
                config = yaml.safe_load(f)
                return config if isinstance(config, dict) else {}
        except Exception as e:
            print(f"[warn] Failed to read config from {config_path}: {e}")
            return {}
