FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

USER vscode
RUN sudo usermod -a -G dialout vscode

RUN sudo apt update
RUN sudo apt install -y \
    build-essential \
    git \
    pkg-config
