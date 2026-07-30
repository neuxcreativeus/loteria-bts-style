
      function scaleApp() {
        const app = document.querySelector('.app');
        const targetWidth = 1450;
        const windowWidth = window.innerWidth;

        const scale = Math.min(windowWidth / targetWidth, 1);
        
        app.style.transform = `scale(${scale})`;
        
        document.body.style.height = (app.offsetHeight * scale) + 'px';
      }

      window.addEventListener('resize', scaleApp);
      window.addEventListener('DOMContentLoaded', scaleApp);
      scaleApp();

      const imageUrls = [
        "images/Arirang-logo.webp", "images/Arirang-logo1.webp", "images/Arirang-logo2.webp", "images/Arirang-logo3.webp", "images/el-beso.webp", "images/el-capitan.webp", "images/el-conejo.webp", "images/el-conejo.webp", "images/el-corazon.webp", "images/el-elote.webp", "images/el-mesero.webp", "images/el-pirata.webp", "images/el-rey.webp", "images/el-sol.webp", "images/el-soldado.webp", "images/el-super-atun.webp", "images/el-velero.webp", "images/el-violin.webp", "images/la-amistad.webp", "images/la-bandera.webp", "images/la-corona.webp", "images/la-luna.webp", "images/la-mascara.webp", "images/la-piramide.webp", "images/los-churros.webp", "images/los-jarritos.webp", "images/los-marineros.webp", "images/los-tacos.webp", "images/los-tambores.webp"
      ];

      function preloadImages() {
        imageUrls.forEach(url => {
          const img = new Image();
          img.src = url;
        });
      }

      window.addEventListener('load', preloadImages);

      //Add Audio here
      const joinLobbySound = new Audio("audio/join-lobby.mp3");
      const quitLobbySound = new Audio("audio/quit-lobby.wav");
      const startSound = new Audio("audio/game-start.mp3");
      const chipSound = new Audio("audio/coin-toss1.wav");
      const cardSounds = [
        new Audio("audio/card-draw.mp3"),
        new Audio("audio/card-draw2.mp3"),
        new Audio("audio/card-draw3.mp3")
      ];
      const winnerSound = new Audio('audio/winner.mp3');
      winnerSound.volume = 0.5;
      const confettiSound = new Audio("audio/confetti-cheers.mp3");
      confettiSound.volume = 0.3;

      const deck = [
        { title: "El Beso", img: "images/el-beso.webp", subtitle: "The Kiss", accent: "#ff5fa2" },
        { title: "El Capitán", img: "images/el-capitan.webp", subtitle: "The Captain", accent: "#7c4dff" },
        { title: "El Súper Atún", img: "images/el-super-atun.webp", subtitle: "The Super Tuna", accent: "#ff7b2c" },
        { title: "El Conejo", img: "images/el-conejo.webp", subtitle: "The Bunny", accent: "#00c7ff" },
        { title: "El Corazón", img: "images/el-corazon.webp", subtitle: "The Heart", accent: "#7a3cff" },
        { title: "El Elote", img: "images/el-elote.webp", subtitle: "The Corn", accent: "#ff4d6d" },
        { title: "El Mesero", img: "images/el-mesero.webp", subtitle: "The Server", accent: "#16a085" },
        { title: "La Luna", img: "images/la-luna.webp", subtitle: "The Moon", accent: "#f4b942" },
        { title: "El Pirata", img: "images/el-pirata.webp", subtitle: "The Pirate", accent: "#ff8fab" },
        { title: "El Rey", img: "images/el-rey.webp", subtitle: "The King", accent: "#4cc9f0" },
        { title: "El Sol", img: "images/el-sol.webp", subtitle: "The Sun", accent: "#f06292" },
        { title: "El Soldado", img: "images/el-soldado.webp", subtitle: "The Soldier", accent: "#8e24aa" },
        { title: "El Velero", img: "images/el-velero.webp", subtitle: "The Sail", accent: "#ff6b6b" },
        { title: "El Violín", img: "images/el-violin.webp", subtitle: "The Violin", accent: "#4caf50" },
        { title: "La Amistad", img: "images/la-amistad.webp", subtitle: "The Friendship", accent: "#ff8f00" },
        { title: "La Bandera", img: "images/la-bandera.webp", subtitle: "The Flag", accent: "#ec4899" },
        { title: "La Corona", img: "images/la-corona.webp", subtitle: "The Crown", accent: "#3b82f6" },
        { title: "La Máscara", img: "images/la-mascara.webp", subtitle: "The Mask", accent: "#14b8a6" },
        { title: "La Pirámide", img: "images/la-piramide.webp", subtitle: "The Pyramid", accent: "#f472b6" },
        { title: "Los Churros", img: "images/los-churros.webp", subtitle: "The Churros", accent: "#22c55e" },
        { title: "Los Jarritos", img: "images/los-jarritos.webp", subtitle: "The Jarritos", accent: "#0f172a" },
        { title: "Los Marineros", img: "images/los-marineros.webp", subtitle: "The Sailors", accent: "#a855f7" },
        { title: "Los Tacos", img: "images/los-tacos.webp", subtitle: "The Tacos", accent: "#f59e0b" },
        { title: "Los Tambores", img: "images/los-tambores.webp", subtitle: "The Drums", accent: "#38bdf8" }
      ];
/* Hidden for now, but if we can get audio for each card, this will go live.

      const cardAudioMap = {
        "el-beso": "https://example.com/audio/corazon.mp3",
        "el-capitan": "https://example.com/audio/luna.mp3",
        "el-conejo": "https://example.com/audio/sol.mp3",
        "el-corazon": "https://example.com/audio/la-corona.mp3",
        "el-elote": "https://example.com/audio/la-corona.mp3",
        "el-mesero": "https://example.com/audio/la-corona.mp3",
        "el-pirata": "https://example.com/audio/la-corona.mp3",
        "el-rey": "https://example.com/audio/la-corona.mp3",
        "el-sol": "https://example.com/audio/la-corona.mp3",
        "el-soldado": "https://example.com/audio/la-corona.mp3",
        "el-super-atun": "https://example.com/audio/la-corona.mp3",
        "el-velero": "https://example.com/audio/la-corona.mp3",
        "el-violin": "https://example.com/audio/la-corona.mp3",
        "la-amistad": "https://example.com/audio/la-corona.mp3",
        "la-bandera": "https://example.com/audio/la-corona.mp3",
        "la-corona": "https://example.com/audio/la-corona.mp3",
        "la-luna": "https://example.com/audio/la-corona.mp3",
        "la-mascara": "https://example.com/audio/la-corona.mp3",
        "la-piramide": "https://example.com/audio/la-corona.mp3",
        "los-churros": "https://example.com/audio/la-corona.mp3",
        "los-jarritos": "https://example.com/audio/la-corona.mp3",
        "los-marineros": "https://example.com/audio/la-corona.mp3",
        "los-tacos": "https://example.com/audio/la-corona.mp3",
        "los-tambores": "https://example.com/audio/la-corona.mp3, or audio/file.mp3"
      };

      function playCardAudio(cardName) {
        const audioUrl = cardAudioMap[cardName];
        if (audioUrl) {
          const audio = new Audio(audioUrl);
          audio.play().catch(err => console.log("Audio waiting for user interaction."));
        }
      }
*/
      const peerConfig = { host: "0.peerjs.com", port: 443, path: "/", secure: true };
      let peer = null;
      let roomCode = "";
      let roomState = null;
      let myPlayerId = null;
      let myPlayerName = "";
      let isHost = false;
      let connection = null;
      let peerId = null;
      let isFlipping = false;
      let hostPeerId = "";
      let lastRenderedCardKey = "";
      let lobbyActive = false;
      const connections = {};

      window.setupPanel = document.getElementById("setupPanel");
      window.gamePanel = document.getElementById("gamePanel");
      window.boardEl = document.getElementById("board");
      window.statusEl = document.getElementById("status");
      window.activeImgEl = document.getElementById("activeImg");
      window.calledListEl = document.getElementById("calledList");
      window.drawBtn = document.getElementById("drawBtn");
      window.startGameBtn = document.getElementById("startGameBtn");
      window.quitBtn = document.getElementById("quitBtn");
      window.flipCardInnerEl = document.getElementById("flipCardInner");
      window.deckCountEl = document.getElementById("deckCount");
      window.playerStripEl = document.getElementById("playerStrip");
      window.lobbyCodeBadge = document.getElementById("lobbyCodeBadge");
      window.setupMessage = document.getElementById("setupMessage");
      window.winnerBanner = document.getElementById("winnerBanner");
      window.playerNameInput = document.getElementById("playerNameInput");
      window.lobbyCodeInput = document.getElementById("lobbyCodeInput");
      

      // Aliases
      window.hostCreateBtn = document.getElementById("hostCreateBtn");
      window.joinRoomBtn = document.getElementById("joinRoomBtn");
      window.joinLobbyBtn = document.getElementById("joinLobbyBtn") || window.joinRoomBtn;
      window.createLobbyBtn = window.hostCreateBtn;

      function syncHeaderVisibility() {
        const isGameActive = roomState && roomState.gameStarted && !roomState.gameOver;
        document.querySelectorAll('.header h2, .header .subtitle').forEach(el => {
          el.style.setProperty('display', isGameActive ? 'none' : 'block', 'important');
        });
      }

      function generateLobbyCode() {
        return Math.random().toString(36).slice(2, 8).toUpperCase();
      }

      function generatePlayerName() {
        const uniqueId = Date.now().toString().slice(-4);
          return playerNameInput.value.trim() || `ARMY #${uniqueId}`;
        }

      function escapeSvgText(text) {
        return String(text)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\"/g, "&quot;")
          .replace(/'/g, "&apos;");
      }

      function wrapSvgText(text, maxCharsPerLine) {
        const words = String(text).split(" ");
        const lines = [];
        let current = "";

        words.forEach((word) => {
          const candidate = current ? `${current} ${word}` : word;
          if (candidate.length <= maxCharsPerLine) {
            current = candidate;
          } else {
            if (current) lines.push(current);
            current = word;
          }
        });

        if (current) lines.push(current);
        return lines.slice(0, 2);
      }

      function createCardSvg(title, img, subtitle, accent) {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 240 320" preserveAspectRatio="xMidYMid slice">
            <image href="${img}" x="0" y="0" width="240" height="320" preserveAspectRatio="xMidYMid slice" />
            <rect x="0" y="240" width="240" height="80" fill="rgba(0,0,0,0.6)" />
            <text x="120" y="275" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="22" fill="white">${title}</text>
            <text x="120" y="300" text-anchor="middle" font-family="Arial" font-size="14" fill="#ccc">${subtitle}</text>
          </svg>`;
        return svg;
        const titleLines = wrapSvgText(title, 18);
        const subtitleLines = wrapSvgText(subtitle, 24);
        const isPermissionToDance = String(title).toLowerCase() === "permission to dance";
        const titleText = titleLines
          .map((line, index) => `<text x="160" y="${148 + index * 16}" text-anchor="middle" font-size="16" font-weight="700" fill="#2d1d45">${escapeSvgText(line)}</text>`)
          .join("");
        const subtitleStartY = isPermissionToDance ? 179 : 171;
        const subtitleText = subtitleLines
          .map((line, index) => `<text x="160" y="${subtitleStartY + index * 13}" text-anchor="middle" font-size="12" fill="#5b3f6d">${escapeSvgText(line)}</text>`)
          .join("");
      }

      function shuffle(array) {
        const copy = [...array]; 
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      }

      function buildBoardCards() {
        return shuffle([...deck]).slice(0, 16).map((card) => ({ ...card, filled: false }));
      }

      function createPlayerState(id, name, hostFlag) {
        return {
          id,
          name,
          board: buildBoardCards(),
          filledCount: 0,
          isHost: hostFlag,
          joinedAt: Date.now()
        };
      }

      function createInitialRoomState() {
        return {
          code: roomCode,
          hostId: hostPeerId,
          players: [],
          currentCard: null,
          calledCards: [],
          drawPile: shuffle(deck),
          gameStarted: false,
          gameOver: false,
          winnerPlayerId: null,
          status: "Lobby ready. The host can start a new game by clicking Start New Game when ready.Pay attention to what's being called and be the first to fill your board!"
        };
      }

      function setLobbyView(visible) {
        const sPanel = document.getElementById("setupPanel");
        const gPanel = document.getElementById("gamePanel");
        const rCalls = document.getElementById("recentCalls");

        if (sPanel) sPanel.hidden = !visible; // If visible is true, show lobby
        if (gPanel) gPanel.hidden = visible;  // If visible is true, hide game
        if (rCalls) rCalls.hidden = visible;
      }


      function updateButtons() {
        const canDraw = isHost && roomState && roomState.gameStarted && !roomState.gameOver;
        drawBtn.hidden = !canDraw;
        drawBtn.disabled = !canDraw;
        if (startGameBtn) {
          startGameBtn.disabled = !isHost || !roomState;
        }
        if (quitBtn) {
          quitBtn.disabled = !roomState;
        }
      }

      function renderPlayers() {
        if (!roomState) {
          playerStripEl.innerHTML = "";
          return;
        }
        playerStripEl.innerHTML = "";
        roomState.players.forEach((player) => {
          const chip = document.createElement("div");
          chip.className = `player-chip${player.id === myPlayerId ? " me" : ""}${player.id === roomState.winnerPlayerId ? " winner" : ""}`;
          chip.innerHTML = `
            <span class="player-name">${player.name}${player.isHost ? " 👑" : ""}</span>
            <span class="player-progress">${player.board.filter((card) => card.filled).length}/16</span>
          `;
          playerStripEl.appendChild(chip);
        });
      }

      function renderBoard() {
        if (!roomState || !myPlayerId) {
          boardEl.innerHTML = "";
          return;
        }
        const me = roomState.players.find((player) => player.id === myPlayerId);
        if (!me) {
          boardEl.innerHTML = "";
          return;
        }

        me.board.forEach((card, index) => {
          let tile = boardEl.children[index];

          if (!tile) {
            tile = document.createElement("button");
            tile.className = "tile";
            boardEl.appendChild(tile);
            
            tile.addEventListener("click", () => {
              const currentMe = roomState.players.find((p) => p.id === myPlayerId);
              if (currentMe && currentMe.board[index]) {
                handleTileClick(currentMe.board[index]);
              }
            });
          }

          if (tile.children.length === 0 || !tile.querySelector("img")) {
            tile.innerHTML = `
              <div class="tile-image-container">
                <img src="${card.img}" alt="${card.title}" class="tile-image" />
                <div class="tile-overlay"></div>
              </div>
            `;
          } else {
            const imgEl = tile.querySelector("img");
            const titleEl = tile.querySelector("strong");
            if (imgEl && imgEl.src !== card.img) imgEl.src = card.img;
            if (titleEl && titleEl.textContent !== card.title) titleEl.textContent = card.title;
              if (!tile.querySelector(".tile-overlay")) {
                const overlay = document.createElement("div");
                overlay.className = "tile-overlay";
                tile.appendChild(overlay);
              }
          }
          

          tile.classList.toggle("filled", !!card.filled);
          const calledAlready = roomState.calledCards && roomState.calledCards.some((cc) => cc && cc.title === card.title);
          const isReady = !card.filled && roomState.gameStarted && !roomState.gameOver && calledAlready;

          tile.classList.toggle("filled", !!card.filled);
          tile.classList.toggle("ready", !!isReady); 

          let chip = tile.querySelector(".tile-chip");
          if (card.filled && !chip) {
            chip = document.createElement("span");
            chip.className = "tile-chip";
            chipSound.cloneNode(true).play().catch(e => console.log("Chip Audio waiting for user click."));
            tile.appendChild(chip);
          } else if (!card.filled && chip) {
            chip.remove();
          }
        });
        syncHeaderVisibility();
      }

      function renderActiveCard() {
            if (!roomState || !roomState.currentCard) {
              document.getElementById("activeCardContainer").innerHTML = "";
              return;
            }

            const card = roomState.currentCard;
            const imageAsset = card.img || card.emoji;
      
            const svg = `
              <svg xmlns="http://www.w3.org/2000/svg" width="320" height="220" viewBox="0 0 320 220">
                <image href="${imageAsset}" x="105" y="25" width="110" height="110" preserveAspectRatio="xMidYMid meet" />
                <text x="160" y="148" ...>${card.title}</text>
                ...
              </svg>`;

            document.getElementById("activeCardContainer").innerHTML = svg;
            const container = document.getElementById('activeCardContainer');
            container.innerHTML = createCardSvg(card.title, card.img, card.subtitle, card.accent);

      }

      function updateDeckCount() {
        if (!roomState) return;
        const el = typeof deckCountEl !== 'undefined' ? deckCountEl : document.getElementById("deckCount");
        if (el) {
          el.textContent = `${roomState.drawPile.length} cards left`;
        }
      }

// Recent Calls List Setup
      function renderCalledList() {
        calledListEl.innerHTML = "";
        if (!roomState || roomState.calledCards.length === 0) {
          const item = document.createElement("div");
          item.className = "called-item";
          item.textContent = "No cards called yet.";
          calledListEl.appendChild(item);
          return;
        }

        roomState.calledCards.slice(0, 24).forEach((card) => {
          const item = document.createElement("div");
          item.className = "called-item";
          item.textContent = `${card.title} • ${card.subtitle}`;
          calledListEl.appendChild(item);
        });
      }

// Winner Setup

      function renderWinnerBanner() {
        if (!roomState || !roomState.gameOver || !roomState.winnerPlayerId) {
          winnerBanner.hidden = true;
          winnerBanner.textContent = "";
          winnerSoundPlayed = false;
          return;
        }
        
        const winner = roomState.players.find((player) => player.id === roomState.winnerPlayerId);
        winnerBanner.hidden = false;
        winnerBanner.textContent = `${winner ? winner.name : "Someone"} wins!`; //Edit later

        // Play sound ONLY the first time the banner appears
        if (!winnerSoundPlayed) {
          if (typeof winnerSound !== 'undefined') {
            winnerSound.play().catch(e => console.log("Audio blocked:", e));
          }
          winnerSoundPlayed = true; 
        }
      }

      function playFlipAnimation() {
        flipCardInnerEl.classList.remove("is-flipping");
        void flipCardInnerEl.offsetWidth;
        flipCardInnerEl.classList.add("is-flipping");
      }

      function launchConfetti() {
        const layer = document.getElementById("confettiLayer");
        const colors = ["#ff5fa2", "#7c4dff", "#ffd166", "#4cc9f0", "#18c37d", "#fff0ff"];
        for (let i = 0; i < 40; i += 1) {
          const piece = document.createElement("div");
          piece.className = "confetti-piece";
          piece.style.left = `${Math.random() * 100}vw`;
          piece.style.top = `-20px`;
          piece.style.background = colors[Math.floor(Math.random() * colors.length)];
          piece.style.setProperty("--drift", `${(Math.random() * 2 - 1) * 160}px`);
          piece.style.animationDuration = `${3 + Math.random() * 2}s`;
          piece.style.animationDelay = `${Math.random() * 0.2}s`;
          layer.appendChild(piece);
          setTimeout(() => piece.remove(), 5000);
        }
        confettiSound.play().catch(e => console.log("Confetti audio"));
      }

      function render() {
        if (!roomState) return;
        if (lobbyActive) {
          setLobbyView(false);
        }
        statusEl.textContent = roomState.status;
        lobbyCodeBadge.textContent = `Lobby ${roomState.code}`;
        renderPlayers();
        renderBoard();
        renderActiveCard();
        renderCalledList();
        updateDeckCount();
        renderWinnerBanner();
        updateButtons();

        const currentCardKey = roomState.currentCard ? `${roomState.currentCard.title}|${roomState.calledCards.length}` : "";
        if (currentCardKey && currentCardKey !== lastRenderedCardKey) {
          playFlipAnimation();
          lastRenderedCardKey = currentCardKey;
        } else if (!currentCardKey) {
          lastRenderedCardKey = "";
        }
        if (window.drawBtn && roomState) {
          const cardsLeft = roomState.drawPile ? roomState.drawPile.length : 0;
          
          window.drawBtn.style.display = (cardsLeft === 0) ? 'none' : 'block';
        }
      }

      function resetLocalView() {
        lobbyActive = false;
        setLobbyView(true);
        
        if (typeof setupMessage !== 'undefined' && setupMessage) setupMessage.textContent = "Pay attention to what's being called and be the first to fill your board!"; //Edit later
        if (typeof winnerBanner !== 'undefined' && winnerBanner) winnerBanner.hidden = true;
        playerStripEl.innerHTML = "";
        boardEl.innerHTML = "";
        calledListEl.innerHTML = "";
        winnerBanner.hidden = true;
        winnerBanner.textContent = "";
        deckCountEl.textContent = "24 cards left";
        lastRenderedCardKey = "";
      }

      function broadcastState() {
        if (!roomState || !isHost) return;
        const payload = JSON.parse(JSON.stringify(roomState));
        Object.values(connections).forEach((conn) => {
          conn.send({ type: "state", roomState: payload });
        });
        render();
      }

      function hostStartNewGame() {
        if (!isHost || !roomState) return;

        //Card "Re-flipped"
        if (window.flipCardInnerEl) {
          window.flipCardInnerEl.classList.remove('is-flipping');
        }

        if (window.activeImgEl) {
          window.activeImgEl.src = ""; 
          window.activeImgEl.style.display = 'none'; 
        }

        document.querySelectorAll('.tile').forEach(tile => {
          tile.classList.remove('filled');
          const chip = tile.querySelector('.tile-chip');
          if (chip) chip.remove();
        });

        // Reset Data
        const fullDeck = JSON.parse(JSON.stringify(deck)); 
        roomState.players = roomState.players.map(p => ({
          ...p,
          board: buildBoardCards(),
          filledCount: 0
        }));

        roomState.currentCard = null;
        roomState.calledCards = [];
        roomState.drawPile = shuffle(fullDeck);
        roomState.gameStarted = true;
        roomState.gameOver = false;
        roomState.winnerPlayerId = null;
        
        lastRenderedCardKey = ""; 

        // Update UI and Peer connections
        if (typeof render === "function") render();
        broadcastState();
        startSound.cloneNode(true).play().catch(() => {});
      }

      function hostDrawCard() {
        if (!isHost || !roomState || !roomState.gameStarted || roomState.gameOver) return;

        if (!roomState.drawPile || roomState.drawPile.length === 0) {
          roomState.status = "No cards left in the deck!";
          broadcastState();
          return;
        }

        const nextCard = roomState.drawPile.pop();
        roomState.currentCard = nextCard;

        const randomSound = cardSounds[Math.floor(Math.random() * cardSounds.length)];
          randomSound.cloneNode(true).play();

        if (!Array.isArray(roomState.calledCards)) roomState.calledCards = [];
        roomState.calledCards.unshift(nextCard);
        roomState.status = `Called ${nextCard.title}! (${roomState.drawPile.length} left)`;
        
        broadcastState();
      }

      function hostHandleMark(playerId, cardTitle) {
        if (!roomState || !roomState.gameStarted || roomState.gameOver || !roomState.currentCard) return;
        const player = roomState.players.find((entry) => entry.id === playerId);
        if (!player) return;
        const target = player.board.find((card) => card.title === cardTitle);
        const cardWasCalled = roomState.calledCards.some((card) => card.title === cardTitle);
        if (!target || target.filled || !cardWasCalled) return;

        target.filled = true;
        player.filledCount = player.board.filter((card) => card.filled).length;

        const allFilled = player.board.every((card) => card.filled);
        if (allFilled) {
          roomState.gameOver = true;
          roomState.winnerPlayerId = player.id;
          roomState.status = `Congratulations, ${player.name}!`;
          launchConfetti();
        }

        broadcastState();
      }

      function handleTileClick(card) {
        if (!roomState || !roomState.gameStarted || roomState.gameOver) return;
        const cardWasCalled = roomState.calledCards.some((calledCard) => calledCard.title === card.title);
        if (!cardWasCalled) {
          statusEl.textContent = "That card has not been called yet!";
          return;
        }
        if (isHost) {
          hostHandleMark(myPlayerId, card.title);
        } else if (connection) {
          connection.send({ type: "mark-request", playerId: myPlayerId, cardTitle: card.title });
        }
      }

      (function() {

        window.chipAssignments = window.chipAssignments || {};
        window.lastAssignedIndex = window.lastAssignedIndex || 0;

        const assignChip = (chip) => {
          const tile = chip.closest('.tile');
          if (!tile) return;
          
          const cardId = tile.querySelector('img')?.src;
          if (!cardId) return;

          if (!window.chipAssignments[cardId]) {
            window.lastAssignedIndex = (window.lastAssignedIndex % 3) + 1;
            window.chipAssignments[cardId] = window.lastAssignedIndex;
          }

          const assignedIdx = window.chipAssignments[cardId];
          chip.classList.add('chip-cycle-' + assignedIdx);
        };

        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === 1) {
                const chips = node.classList?.contains('tile-chip') ? [node] : Array.from(node.querySelectorAll('.tile-chip'));
                chips.forEach(assignChip);
              }
            });
          });
        });

        observer.observe(document.body, { childList: true, subtree: true });
      })();

      function createLobby() {
        setupPanel = document.getElementById("setupPanel");
        gamePanel = document.getElementById("gamePanel");
        playerStripEl = document.getElementById("playerStrip");
        myPlayerName = generatePlayerName();
        roomCode = generateLobbyCode();
        hostPeerId = roomCode.toLowerCase();
        isHost = true;
        myPlayerId = hostPeerId;
        roomState = createInitialRoomState();
        roomState.players.push(createPlayerState(myPlayerId, myPlayerName, true));
        lobbyActive = true;
        setLobbyView(false);
        lobbyCodeBadge.textContent = `Lobby ${roomCode}`;
        setupMessage.textContent = "Lobby ready. Share the code with others!";
        statusEl.textContent = "Once everyone's here, the host can start a new game by clicking Start New Game when ready.";
        render();

        if (peer) peer.destroy();
        peer = new Peer(hostPeerId, peerConfig);
        peer.on("open", () => {
          peerId = peer.id;
          render();
        });
        peer.on("connection", (conn) => {
          connections[conn.peer] = conn;
          conn.on("open", () => {
            conn.send({ type: "joined", playerId: conn.peer, roomCode });
          });
          conn.on("data", (data) => {
            if (data.type === "join-request") {
              joinLobbySound.cloneNode(true).play().catch(e => console.log('User Joining for Host Audio blocked'))
              const player = createPlayerState(conn.peer, data.playerName || "Guest", false);
              roomState.players.push(player);
              roomState.status = `${player.name} joined the lobby.`;
              conn.send({ type: "joined", playerId: player.id, roomCode });
              broadcastState();
            } else if (data.type === "mark-request") {
              hostHandleMark(data.playerId, data.cardTitle);
            } else if (data.type === "new-game-request") {
              hostStartNewGame();
            }
          });
          conn.on("close", () => {
            delete connections[conn.peer];
            roomState.players = roomState.players.filter((player) => player.id !== conn.peer);
            roomState.status = "A player left the lobby.";
            broadcastState();
          });
        });
        joinLobbySound.play().catch(e => console.log("Join Lobby Audio blocked."));
      }

      function joinLobby() {
        const code = lobbyCodeInput.value.trim().toUpperCase();
        if (!code) {
          setupMessage.textContent = "Enter a lobby code first.";
          return;
        }
        setupPanel = document.getElementById("setupPanel");
        gamePanel = document.getElementById("gamePanel");
        playerStripEl = document.getElementById("playerStrip");
        myPlayerName = generatePlayerName();
        isHost = false;
        roomCode = code;
        lobbyActive = true;
        setLobbyView(false);
        setupMessage.textContent = "Joining lobby…";
        statusEl.textContent = "Connecting to the lobby…";
        lobbyCodeBadge.textContent = `Lobby ${roomCode}`;
        if (peer) peer.destroy();
        peer = new Peer(undefined, peerConfig);
        peer.on("open", () => {
          connection = peer.connect(code.toLowerCase());
          connection.on("open", () => {
            connection.send({ type: "join-request", playerName: myPlayerName });
          });
          connection.on("data", (data) => {
            if (data.type === "joined") {
              joinLobbySound.cloneNode(true).play().catch(e => console.log('User Joining Non-host Audio leaving blocked'))
              myPlayerId = data.playerId;
              setupMessage.textContent = `Joined ${roomCode}. Waiting for the host.`;
              render();
            } else if (data.type === "state") {
              roomState = data.roomState;
              render();
            }
          });
          connection.on("close", () => {
            setupMessage.textContent = "The lobby closed or disconnected.";
            resetLocalView();
          });
        });
      joinLobbySound.play().catch(e => console.log("Join Lobby Audio waiting for user click."));
      }

      function quitLobby() {
        lobbyActive = false;

        quitLobbySound.cloneNode(true).play().catch(e => console.log('User Leaving Audio blocked'));

        if (peer) {
          if (connection) connection.close();
          Object.values(connections).forEach((conn) => conn.close());
          peer.destroy();
        }
        
        peer = null;
        roomState = null;
        roomCode = "";
        myPlayerId = null;
        myPlayerName = "";
        connection = null;
        isHost = false;
        hostPeerId = "";
        Object.keys(connections).forEach((key) => delete connections[key]);
        resetLocalView();
      }

      drawBtn.onclick = () => {
        if (!roomState) return;
        if (isHost) {
          hostDrawCard();
        }

      };
      /* ---RECOVERY BLOCK --- */

      function safeBind(id, fn) {
        const el = document.getElementById(id);
        if (el) el.onclick = fn;
      }

      safeBind("hostCreateBtn", createLobby);
      safeBind("joinLobbyBtn", joinLobby);
      safeBind("joinRoomBtn", joinLobby);
      safeBind("startGameBtn", () => {
        if (isHost && roomState) hostStartNewGame();
        else if (connection) connection.send({ type: "new-game-request" });
      });
      safeBind("drawBtn", hostDrawCard);
      safeBind("quitBtn", () => {
        quitLobbySound.cloneNode(true).play().catch(e => console.log('Quit Lobby Audio blocked'));
        setTimeout(() => window.location.reload(), 650);
      });

      (function init() {
        try {
          resetLocalView();
          if (typeof render === "function") render();
        } catch (err) {
          console.error("Initialization error prevented:", err);
          const sPanel = document.getElementById("setupPanel");
          if (sPanel) sPanel.hidden = false;
        }
      })();