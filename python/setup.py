from setuptools import setup, find_packages

setup(
    name="hyoml",
    version="0.0.1",
    description="Hyoml - Hybrid Object Markup Language parser and formatter",
    author="Ahmed Daif",
    author_email="prog.ahmeddaif@gmail.com",
    license="MIT",
    packages=find_packages(where="python"),
    package_dir={"": "python"},
    python_requires=">=3.8",
    install_requires=[
        "beautifulsoup4>=4.12.2",
        "rdflib>=6.3.2",
        "requests>=2.31.0"
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)
