function isPawnMenacing(plateau, color, position) {
    let piecesInDanger = [];

    if (color === 'w') {
        let piece = isPieceHere(plateau, color, `${parseInt(position[0]) - 1}${parseInt(position[1]) + 1}`);
        if (piece) {
            piecesInDanger.push(piece);
        }
        piece = isPieceHere(plateau, color, `${parseInt(position[0]) + 1}${parseInt(position[1]) + 1}`)
        if (piece) {
            piecesInDanger.push(piece);
        }
    }

    else if (color === 'b') {
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

function getPiecesInDanger(plateau) {
    let piecesInDanger = [];

    for (const piece of plateau) {
        switch (piece.split(' ')[0][1]) {
            case 'p':
                piecesInDanger.push(...isPawnMenacing(plateau, piece.split(' ')[0][0], piece.split(' ')[1].slice(-2)));
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

try {
    const board = document.querySelector("wc-chess-board");

    let pieces = board.querySelectorAll(".piece");

    function callback(mutationList, observer) {
        for (let mutation of mutationList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                const oldClass = mutation.oldValue;
                const newClass = target.className;

                const oldSquareClass = oldClass.split(' ').find(cls => cls.startsWith('square-'));
                const newSquareClass = newClass.split(' ').find(cls => cls.startsWith('square-'));

                if (oldSquareClass !== newSquareClass) {
                    const oldHighlights = board.querySelectorAll(".highlight");
                    oldHighlights.forEach(highlight => {
                        highlight.remove();
                    });

                    const formatedPieces = [...pieces].map(piece => piece.className.split(' ').slice(1).join(' '));
                    const piecesInDanger = [...new Set(getPiecesInDanger(formatedPieces))];

                    for (const piece of piecesInDanger) {
                        const div = document.createElement("div");
                        div.classList.add("highlight", piece.split(' ')[1], "chess-com-helper");
                        div.style = "background-color: rgb(255, 0, 0); opacity: 0.5;"
                        div.setAttribute("data-test-element", "highlight");
                        board.insertAdjacentElement("afterbegin", div);
                    }
                }
            }
        }
    }

    const observer = new MutationObserver(callback);
    pieces.forEach(piece => {
        observer.observe(piece, { attributes: true, attributeOldValue: true, attributeFilter: ['class'] });
    });
}
catch (error) {
    console.log(error);
}