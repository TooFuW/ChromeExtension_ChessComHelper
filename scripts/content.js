async function isPawnMenacing(plateau, color, position) {
    let piecesInDanger = [];
    const colorState = await getColorState();
    
    if ((color === 'w' && colorState) || (color === 'b' && !colorState)) {
        let piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1]) + 1}`);
        if (piece) {
            piecesInDanger.push(piece);
        }
        piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1]) + 1}`)
        if (piece) {
            piecesInDanger.push(piece);
        }
    }

    else {
        let piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1]) - 1}`);
        if (piece) {
            piecesInDanger.push(piece);
        }
        piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1]) - 1}`)
        if (piece) {
            piecesInDanger.push(piece);
        }
    }

    return piecesInDanger;
}

function isRookMenacing(plateau, color, position) {
    let piecesInDanger = [];

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) + i}${parseInt(position[1])}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) - i}${parseInt(position[1])}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0])}${parseInt(position[1]) + i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0])}${parseInt(position[1]) - i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    return piecesInDanger;
}

function isKnightMenacing(plateau, color, position) {
    let piecesInDanger = [];

    let piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 2}${parseInt(position[1]) + 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1]) + 2}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1]) + 2}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 2}${parseInt(position[1]) + 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 2}${parseInt(position[1]) - 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1]) - 2}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1]) - 2}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 2}${parseInt(position[1]) - 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    return piecesInDanger;
}

function isBishopMenacing(plateau, color, position) {
    let piecesInDanger = [];
    
    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) + i}${parseInt(position[1]) + i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) - i}${parseInt(position[1]) - i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) - i}${parseInt(position[1]) + i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) + i}${parseInt(position[1]) - i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    return piecesInDanger;
}

function isQueenMenacing(plateau, color, position) {
    let piecesInDanger = [];
    
    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) + i}${parseInt(position[1])}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) - i}${parseInt(position[1])}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0])}${parseInt(position[1]) + i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0])}${parseInt(position[1]) - i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) + i}${parseInt(position[1]) + i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) - i}${parseInt(position[1]) - i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) - i}${parseInt(position[1]) + i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        let piece = isPieceHere(plateau, null, `${parseInt(position[0]) + i}${parseInt(position[1]) - i}`);
        if (piece) {
            if (piece.split(' ')[0][0] !== color) {
                piecesInDanger.push(piece); 
            }
            break;
        }
    }
    
    return piecesInDanger;
}

function isKingMenacing(plateau, color, position) {
    let piecesInDanger = [];
    
    let piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1])}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1])}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0])}${parseInt(position[1]) + 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }
    
    piece = isPieceHere(plateau, color, `${parseInt(position[0])}${parseInt(position[1]) - 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }
    
    piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1]) + 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1]) + 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1]) - 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }
    
    piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1]) - 1}`);
    if (piece) {
        piecesInDanger.push(piece);
    }

    return piecesInDanger;
}

function isPieceHere(plateau, color, position) {
    for (const piece of plateau) {
        if (piece !== "" && piece.split(' ')[1].slice(-2) === position) {
            if (color === null) {
                return piece;
            }
            else if (piece.split(' ')[0][0] !== color) {
                return piece;
            }
        }
    }
}

async function getPiecesInDanger(plateau) {
    let piecesInDanger = [];

    for (const piece of plateau) {
        switch (piece.split(' ')[0][1]) {
            case 'p':
                piecesInDanger.push(...await isPawnMenacing(plateau, piece.split(' ')[0][0], piece.split(' ')[1].slice(-2)));
                break;

            case 'r':
                piecesInDanger.push(...isRookMenacing(plateau, piece.split(' ')[0][0], piece.split(' ')[1].slice(-2)));
                break;

            case 'n':
                piecesInDanger.push(...isKnightMenacing(plateau, piece.split(' ')[0][0], piece.split(' ')[1].slice(-2)));
                break;

            case 'b':
                piecesInDanger.push(...isBishopMenacing(plateau, piece.split(' ')[0][0], piece.split(' ')[1].slice(-2)));
                break;

            case 'q':
                piecesInDanger.push(...isQueenMenacing(plateau, piece.split(' ')[0][0], piece.split(' ')[1].slice(-2)));
                break;

            case 'k':
                piecesInDanger.push(...isKingMenacing(plateau, piece.split(' ')[0][0], piece.split(' ')[1].slice(-2)));
                break;
        }
    }

    return piecesInDanger;
}

async function getColorState() {
    const result = await chrome.storage.sync.get(['colorState']);
    const colorState = result.colorState;
    if (colorState) {
        return false;
    } else {
        return true;
    }
}

async function getActivationState() {
    const result = await chrome.storage.sync.get(['activationState']);
    const activationState = result.activationState;
    if (activationState) {
        return false;
    } else {
        return true;
    }
}

try {
    const warningPopup = document.querySelector(".sidebar-component");
    if(warningPopup) {
        const warningMessage = document.createElement("p");
        warningMessage.textContent = "Don't forget to select your color in the extension popup !";
        warningMessage.classList.add("cc-heading-xx-small");
        warningMessage.style = "text-align: center; padding-top: 10px; padding-bottom: 10px; margin-bottom: 10px; color: red; background-color: white; border-radius: 5px;";
        warningPopup.insertAdjacentElement("beforebegin", warningMessage);
    }

    let intervalId = setInterval(() => {
        let pieces = document.querySelectorAll(".piece");
        if (pieces.length > 0) {
    
            async function handlePieceChange() {
                const oldHighlights = document.querySelector("wc-chess-board").querySelectorAll(".chess-com-helper");
                oldHighlights.forEach(highlight => {
                    highlight.remove();
                });
    
                if (await getActivationState()) {
                    const formatedPieces = [...pieces].map(piece => piece.className.split(' ').slice(1).join(' '));
                    const piecesInDanger = [...new Set(await getPiecesInDanger(formatedPieces))];
    
                    for (const piece of piecesInDanger) {
                        const div = document.createElement("div");
                        div.classList.add("highlight", piece.split(' ')[1], "chess-com-helper");
                        div.style = "background-color: rgb(255, 0, 0); opacity: 0.5;";
                        div.setAttribute("data-test-element", "highlight");
                        document.querySelector("wc-chess-board").insertAdjacentElement("afterbegin", div);
                    }
                }
            }
    
            async function callback(mutationList, observer) {
                for (let mutation of mutationList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        const target = mutation.target;
                        const oldClass = mutation.oldValue;
                        const newClass = target.className;
    
                        const oldSquareClass = oldClass.split(' ').find(cls => cls.startsWith('square-'));
                        const newSquareClass = newClass.split(' ').find(cls => cls.startsWith('square-'));
    
                        if (oldSquareClass !== newSquareClass) {
                            await handlePieceChange();
                        }
                    }
                }
            }
    
            const observer = new MutationObserver(callback);
            pieces.forEach(piece => {
                observer.observe(piece, { attributes: true, attributeOldValue: true, attributeFilter: ['class'] });
            });
    
            chrome.storage.onChanged.addListener(function (changes, namespace) {
                if (changes.activationState || changes.colorState) {
                    handlePieceChange();
                }
            });
    
            clearInterval(intervalId);
        }
    }, 500);    
}
catch (error) {
    console.log(error);
}