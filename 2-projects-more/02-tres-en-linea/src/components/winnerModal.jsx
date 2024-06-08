/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Square } from "./Square";

export function WinnerModal ({winner, resetGame}) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Gano el:";

  return (
    <section>
      {winner != null && (
        <section className="winner">
          <div className="text">
            <h2>{winnerText}</h2>

            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de Nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </section>
  );
}
