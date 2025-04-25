from setuptools import setup, find_packages

setup(
    name='hyoml',
    version = "0.0.1",
    packages=find_packages(where="python"),
    package_dir={"": "python"},
    install_requires=[],
    python_requires='>=3.6',
)
