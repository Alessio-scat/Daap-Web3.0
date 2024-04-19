const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});

// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// module.exports = buildModule("WalletModule", (m) => {
//     // Si votre contrat Wallet n'a pas besoin de paramètres spécifiques au moment du déploiement,
//     // la création est simplifiée sans paramètres supplémentaires.
//     const wallet = m.contract("Wallet");

//     // Vous pouvez toujours passer des valeurs de configuration ici si nécessaire, par exemple,
//     // vous pouvez vouloir définir des valeurs initiales pour les tests ou la configuration du contrat.

//     return { wallet };
// });
