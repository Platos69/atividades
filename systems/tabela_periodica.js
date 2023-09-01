let elementoEscolher

const tipoEscolher = prompt(
  "Escolha o tipo das familías que deseja ver:\n\nRepresentativas\nTransitivas"
)

switch (tipoEscolher) {
  case "1":
  case "Representativas":
  case "representativas":
    const familiasEscolherRepresentativas = prompt(
      "Escolha uma das familías\n\nGrupo1 - Familia1A\nGrupo2 - Familia2A\nGrupo 13 - Familia3A\nGrupo14 - Familia4A\nGrupo15 - Familia5A\nGrupo16 - Familia6A\nGrupo17 - Familia7A\nGrupo18 - Familia8A"
    )

    switch (familiasEscolherRepresentativas) {
      case "1":
      case "Grupo1":
      case "grupo1":
      case "Familia1A":
      case "familia1a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 1 da família dos Metais Alcalinos!\nEscolha um elemento para analisar:\n\nLítio\nSódio\nPotássio\nRubídio\nCésio\nFrâncio"
        )
        switch (elementoEscolher) {
          case "1":
          case "Litio":
          case "litio":
            elementoEscolher = alert(
              "Sobre o lítio:\n\nSérie química: Metal, Metal alcalino, Elemento do 2º Período\nSimbólo: Li\nNúmero atômico: 3\nMassa atômica: 6,9u\nEletróns: 3\nProtóns: 3\nPonto de fusão: 180,5°C\nPonto de ebulição: 1342°C"
            )
            break

          case "2":
          case "Sodio":
          case "sodio":
            elementoEscolher = alert(
              "Sobre o sódio:\n\nSérie química: Metal, Metal alcalino, Elemento do 3º Período\nSimbólo: Na\nNúmero atômico: 11\nMassa atômica: 22,9u\nEletróns: 11\nProtóns: 11\nPonto de fusão: 97,79°C\nPonto de ebulição: 882,8°C"
            )
            break
          case "3":
          case "Potassio":
          case "potassio":
            elementoEscolher = alert(
              "Sobre o potássio:\n\nSérie química: Metal, Metal alcalino, Elemento do 4º período\nSimbólo: K\nNúmero atômico: 19\nMassa atômica: 39u\nEletróns: 19\nProtóns: 19\nPonto de fusão: 63,5°C\nPonto de ebulição: 758,8°C"
            )
            break
          case "4":
          case "Rubidio":
          case "rubidio":
            elementoEscolher = alert(
              "Sobre o rubídio:\n\nSérie química: Metal, Metal alcalino, Elemento do 5º Período\nSimbólo: Rb\nNúmero atômico: 37\nMassa atômica: 85,5u\nEletróns: 37\nProtóns: 37\nPonto de fusão: 39,3°C\nPonto de ebulição: 688°C"
            )
            break

          case "5":
          case "Cesio":
          case "cesio":
            elementoEscolher = alert(
              "Sobre o césio:\n\nSérie química: Metal, Metal alcalino, Elemento do 6º Período\nSimbólo: Cs\nNúmero atômico: 55\nMassa atômica: 132,9u\nEletróns: 55\nProtóns: 55\nPonto de fusão: 28,44°C\nPonto de ebulição: 670°C"
            )
            break

          case "6":
          case "Francio":
          case "francio":
            elementoEscolher = alert(
              "Sobre o frâncio:\n\nSérie química: Metal, Metal alcalino, Elemento do 7º periodo\nSimbólo: Fr\nNúmero atômico: 87\nMassa atômica: 223u\nEletróns: 87\nProtóns: 87\nPonto de fusão: 26,85°C\nPonto de ebulição: 676,85°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      case "2":
      case "Grupo2":
      case "grupo2":
      case "Familia2A":
      case "familia2a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 2 da família dos Metais Alcalinoterrosos!\nEscolha um elemento para analisar:\n\nBerílio\nMagnésio\nCálcio\nEstrôncio\nBário\nRádio"
        )

        switch (elementoEscolher) {
          case "1":
          case "Berilio":
          case "berilio":
            elementoEscolher = alert(
              "Sobre o berílio:\n\nSérie química: Metal, Metal alcalinoterroso, Elemento do 2º Período\nSimbólo: Be\nNúmero atômico: 9\nMassa atômica: 9u\nEletróns: 9\nProtóns: 9\nPonto de fusão: 1287°C\nPonto de ebulição: 2469°C"
            )
            break

          case "2":
          case "Magnesio":
          case "magnesio":
            elementoEscolher = alert(
              "Sobre o magnésio:\n\nSérie química: Metal, Metal alcalinoterroso, Elemento do 3º Período\nSimbólo: Mg\nNúmero atômico: 12\nMassa atômica: 24,3u\nEletróns: 12\nProtóns: 12\nPonto de fusão: 650°C\nPonto de ebulição: 1091°C"
            )
            break

          case "3":
          case "Calcio":
          case "calcio":
            elementoEscolher = alert(
              "Sobre o cálcio:\n\nSérie química: Metal, Metal alcalinoterroso, Elemento do 4º período\nSimbólo: Ca\nNúmero atômico: 20\nMassa atômica: 40u\nEletróns: 20\nProtóns: 20\nPonto de fusão: 842°C\nPonto de ebulição: 1484°C"
            )
            break

          case "4":
          case "Estroncio":
          case "estroncio":
            elementoEscolher = alert(
              "Sobre o estrôncio:\n\nSérie química: Metal, Metal alcalinoterroso, Elemento do 5º Período\nSimbólo: Sr\nNúmero atômico: 38\nMassa atômica: 87,6u\nEletróns: 38\nProtóns: 38\nPonto de fusão: 767°C\nPonto de ebulição: 1384°C"
            )
            break

          case "5":
          case "Bario":
          case "bario":
            elementoEscolher = alert(
              "Sobre o bário:\n\nSérie química: Metal, Metal alcalinoterroso, Elemento do 6º Período\nSimbólo: Ba\nNúmero atômico: 56\nMassa atômica: 137u\nEletróns: 56\nProtóns: 56\nPonto de fusão: 727°C\nPonto de ebulição: 1897°C"
            )
            break

          case "6":
          case "Radio":
          case "radio":
            elementoEscolher = alert(
              "Sobre o rádio:\n\nSérie química: Metal, Metal alcalinoterroso, Elemento do 7º periodo\nSimbólo: Ra\nNúmero atômico: 88\nMassa atômica: 226u\nEletróns: 88\nProtóns: 88\nPonto de fusão: 700°C\nPonto de ebulição de 1500°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      case "3":
      case "Grupo13":
      case "grupo13":
      case "Familia3A":
      case "familia3a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 13 da família do Boro!\nEscolha um elemento para analisar:\n\nBoro\nAlumínio\nGálio\nÍndio\nTálio\nNihônio"
        )

        switch (elementoEscolher) {
          case "1":
          case "Boro":
          case "boro":
            elementoEscolher = alert(
              "Sobre o boro:\n\nSérie química: Semimetal, Grupo do boro, Grupo do boro, Elemento do 2º Período\nSimbólo: B\nNúmero atômico: 5\nMassa atômica: 10,8u\nEletróns: 5\nProtóns: 5\nPonto de fusão: 2076°C\nPonto de ebulição: 4000°C"
            )
            break

          case "2":
          case "Aluminio":
          case "aluminio":
            elementoEscolher = alert(
              "Sobre o alumínio:\n\nSérie química: Metal, Metal pesado tóxico, Grupo do boro, Elemento do 3º Período\nSimbólo: Al\nNúmero atômico: 13\nMassa atômica: 26,9u\nEletróns: 13\nProtóns: 13\nPonto de fusão: 660,3°C\nPonto de ebulição: 2470°C"
            )
            break

          case "3":
          case "Galio":
          case "galio":
            elementoEscolher = alert(
              "Sobre o gálio:\n\nSérie química: Metal, Metal pesado tóxico, Grupo do boro, Elemento do 4º período\nSimbólo: Ga\nNúmero atômico: 31\nMassa atômica: 69,7u\nEletróns: 31\nProtóns: 31\nPonto de fusão: 29,72ºC\nPonto de ebulição: 2403ºC"
            )
            break

          case "4":
          case "Indio":
          case "indio":
            elementoEscolher = alert(
              "Sobre o índio:\n\nSérie química: Metal, Metal pesado tóxico, Grupo do boro, Elemento do 5º Período\nSimbólo: In\nNúmero atômico: 49\nMassa atômica: 156,6u\nEletróns: 49\nProtóns: 49\nPonto de fusão: 29,72ºC\nPonto de ebulição: 2072°C"
            )
            break

          case "5":
          case "Talio":
          case "talio":
            elementoEscolher = alert(
              "Sobre o tálio:\n\nSérie química: Metal, Metal pesado tóxico, Grupo do boro, Elemento do 6º Período\nSimbólo: Tl\nNúmero atômico: 81\nMassa atômica: 204,4u\nEletróns: 81\nProtóns: 81\nPonto de fusão: 303,8°C\nPonto de ebulição: 1473°C"
            )
            break

          case "6":
          case "Nihonio":
          case "nihonio":
            elementoEscolher = alert(
              "Sobre o nihônio:\n\nSérie química: Metal, Grupo do boro,Elemento do 7º periodo\nSimbólo: Nh\nNúmero atômico: 113\nMassa atômica: 286u\nEletróns: 113\nProtóns: 113\nPonto de fusão: 430°C\nPonto de ebulição: 1100°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      case "4":
      case "Grupo14":
      case "grupo14":
      case "Familia4A":
      case "familia4a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 14 da família do Carbono!\nEscolha um elemento para analisar:\n\nCarbono\nSilício\nGermânio\nEstanho\nChumbo\nFleróvio"
        )

        switch (elementoEscolher) {
          case "1":
          case "Carbono":
          case "carbono":
            elementoEscolher = alert(
              "Sobre o carbono:\n\nSérie química: Não-metal, Grupo do carbono, Elemento do 2º Período\nSimbólo: C\nNúmero atômico: 6\nMassa atômica: 12u\nEletróns: 6\nProtóns: 6\nPonto de fusão: 3550ºC\nPonto de ebulição: 4287ºC"
            )
            break

          case "2":
          case "Silicio":
          case "silicio":
            elementoEscolher = alert(
              "Sobre o silício:\n\nSérie química: Semimetal, Grupo do carbono, Elemento do 3º Período\nSimbólo: Al\nNúmero atômico: 14\nMassa atômica: 28u\nEletróns: 14\nProtóns: 14\nPonto de fusão: 1410°C\nPonto de ebulição: 2355°C"
            )
            break

          case "3":
          case "Germanio":
          case "germanio":
            elementoEscolher = alert(
              "Sobre o germânio:\n\nSérie química: Semimetal, Grupo do carbono, Metal pesado tóxico, Elemento do 4º período\nSimbólo: Ge\nNúmero atômico: 32\nMassa atômica: 72u\nEletróns: 32\nProtóns: 32\nPonto de fusão: 938,2°C\nPonto de ebulição: 2833°C"
            )
            break

          case "4":
          case "Estanho":
          case "estanho":
            elementoEscolher = alert(
              "Sobre o estanho:\n\nSérie química: Metal, Metal pesado tóxico, Grupo do carbono, Elemento do 5º Período\nSimbólo: Sn\nNúmero atômico: 50\nMassa atômica: 118,7u\nEletróns: 50\nProtóns: 50\nPonto de fusão: 231,9ºC\nPonto de ebulição: 2602°C"
            )
            break

          case "5":
          case "Chumbo":
          case "chumbo":
            elementoEscolher = alert(
              "Sobre o chumbo:\n\nSérie química: Metal, Metal pesado tóxico, Grupo do carbono, Elemento do 6º Período\nSimbólo: Pb\nNúmero atômico: 82\nMassa atômica: 207,2u\nEletróns: 82\nProtóns: 82\nPonto de fusão: 327,5ºC\nPonto de ebulição: 1750ºC"
            )
            break

          case "6":
          case "Flerovio":
          case "flerovio":
            elementoEscolher = alert(
              "Sobre o fleróvio:\n\nSérie química: Metal, Grupo do carbono, Elemento do 7º periodo\nSimbólo: Fl\nNúmero atômico: 114\nMassa atômica: 289u\nEletróns: 114\nProtóns: 114\nPonto de fusão: -73°C\nPonto de ebulição: 107°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      case "5":
      case "Grupo15":
      case "grupo15":
      case "Familia5A":
      case "familia5a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 15 da família do Nitrogênio!\nEscolha um elemento para analisar:\n\nNitrogênio\nFósforo\nArsênio\nAntimônio\nBismuto\nMoscóvio"
        )

        switch (elementoEscolher) {
          case "1":
          case "Nitrogenio":
          case "nitrogenio":
            elementoEscolher = alert(
              "Sobre o nitrogênio:\n\nSérie química: Não-metal, Grupo do nitrogênio, Elemento do 2º Período\nSimbólo: N\nNúmero atômico: 7\nMassa atômica: 14u\nEletróns: 7\nProtóns: 7\nPonto de ebulição: -195,8°C\nPonto de fusão: -210°C"
            )
            break

          case "2":
          case "Fosforo":
          case "fosforo":
            elementoEscolher = alert(
              "Sobre o fósforo:\n\nSérie química: Não-metal, Grupo do nitrogênio, Elemento do 3º Período\nSimbólo: P\nNúmero atômico: 15\nMassa atômica: 30u\nEletróns: 15\nProtóns: 15\nPonto de fusão: 44,1°C\nPonto de ebulição: 280°C"
            )
            break

          case "3":
          case "Arsenio":
          case "arsenio":
            elementoEscolher = alert(
              "Sobre o arsênio:\n\nSérie química: Semimetal, Metal pesado tóxico, Grupo do nitrogênio, Elemento do 4º período\nSimbólo: As\nNúmero atômico: 33\nMassa atômica: 75u\nEletróns: 33\nProtóns: 33\nPonto de fusão: 816,8°C\nPonto de ebulição: 613°C"
            )
            break

          case "4":
          case "Antimonio":
          case "antimonio":
            elementoEscolher = alert(
              "Sobre o antimônio:\n\nSérie química: Semimetal, Grupo do nitrogênio, Metal pesado tóxico, Elemento do 5º Período\nSimbólo: Sb\nNúmero atômico: 51\nMassa atômica: 121,7u\nEletróns: 51\nProtóns: 51\nPonto de fusão: 630,63°C\nPonto de ebulição: 1587°C"
            )
            break

          case "5":
          case "Bismuto":
          case "bismuto":
            elementoEscolher = alert(
              "Sobre o chumbo:\n\nSérie química: Metal, Grupo do nitrogênio, Metal pesado tóxico, Elemento do 6º Período\nSimbólo: Bi\nNúmero atômico: 83\nMassa atômica: 208,9u\nEletróns: 83\nProtóns: 83\nPonto de fusão de 271°C\nPonto de ebulição de 1560°C"
            )
            break

          case "6":
          case "Moscovio":
          case "moscovio":
            elementoEscolher = alert(
              "Sobre o moscóvio:\n\nSérie química: Metal, Grupo do nitrogênio, Elemento do 7º periodo\nSimbólo: Mc\nNúmero atômico: 115\nMassa atômica: 289u\nEletróns: 115\nProtóns: 115\nPonto de fusão: 430°C\nPonto de ebulição: 1100°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      case "6":
      case "Grupo16":
      case "grupo16":
      case "Familia6A":
      case "familia6a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 16 da familia dos Calcogênios!\nEscolha um elemento para analisar:\n\nOxigênio\nEnxofre\nSelênio\nTelúrio\nPolônio\nLivermório"
        )

        switch (elementoEscolher) {
          case "1":
          case "Oxigenio":
          case "oxigenio":
            elementoEscolher = alert(
              "Sobre o oxigênio:\n\nSérie química: Não-metal, Calcogênio, Elemento do 2º Período\nSimbólo: O\nNúmero atômico: 8\nMassa atômica: 15,9u\nEletróns: 8\nProtóns: 8\nPonto de fusão: -218°C\nPonto de ebulição: -183°C"
            )
            break

          case "2":
          case "Enxofre":
          case "enxofre":
            elementoEscolher = alert(
              "Sobre o enxofre:\n\nSérie química: Não-metal, Calcogênio, Elemento do 3º Período\nSimbólo: S\nNúmero atômico: 16\nMassa atômica: 32u\nEletróns: 16\nProtóns: 16\nPonto de fusão: 112,8°C\nPonto de ebulição: 444,6°C"
            )
            break

          case "3":
          case "Selenio":
          case "selenio":
            elementoEscolher = alert(
              "Sobre o selênio:\n\nSérie química: Não-metal, Calcogênio, Elemento do 4º período\nSimbólo: Se\nNúmero atômico: 34\nMassa atômica: 78,9u\nEletróns: 34\nProtóns: 34\nPonto de fusão: 220,8°C\nPonto de ebulição: 684,8°C"
            )
            break

          case "4":
          case "Telurio":
          case "telurio":
            elementoEscolher = alert(
              "Sobre o telúrio:\n\nSérie química: Semimetal, Calcogênio, Metal pesado tóxico, Elemento do 5º Período\nSimbólo: Te\nNúmero atômico: 52\nMassa atômica: 127,6u\nEletróns: 52\nProtóns: 52\nPonto de fusão: 449,5°C\nPonto de ebulição: 987,8°C"
            )
            break

          case "5":
          case "Polonio":
          case "polonio":
            elementoEscolher = alert(
              "Sobre o polônio:\n\nSérie química: Metal, Calcogênio, Metal pesado tóxico, Elemento do 6º Período\nSimbólo: Po\nNúmero atômico: 84\nMassa atômica: 209u\nEletróns: 84\nProtóns: 84\nPonto de fusão: 254ºC\nPonto de ebulição: 962°C"
            )
            break

          case "6":
          case "Livermorio":
          case "livermorio":
            elementoEscolher = alert(
              "Sobre o livermório:\n\nSérie química: Metal, Calcogênio, Elemento do 7º periodo\nSimbólo: Lv\nNúmero atômico: 116\nMassa atômica: 293u\nEletróns: 116\nProtóns: 116\nPonto de fusão: 449,51°C\nPonto de ebulição: 988°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      case "7":
      case "Grupo17":
      case "grupo17":
      case "Familia7A":
      case "familia7a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 17 dos Halogênios!\nEscolha um elemento para analisar:\n\nFlúor\nCloro\nBromo\nIodo\nÁstato\nTenesso"
        )

        switch (elementoEscolher) {
          case "1":
          case "Fluor":
          case "fluor":
            elementoEscolher = alert(
              "Sobre o flúor:\n\nSérie química: Halogênio, Não-metal, Elemento do 2º Período\nSimbólo: F\nNúmero atômico: 9\nMassa atômica: 18,9u\nEletróns: 9\nProtóns: 9\nPonto de fusão: -219,7°C\nPonto de ebulição: -188,1°C"
            )
            break

          case "2":
          case "Cloro":
          case "cloro":
            elementoEscolher = alert(
              "Sobre o cloro:\n\nSérie química: Não-metal, Halogênio, Elemento do 3º Período\nSimbólo: Cl\nNúmero atômico: 17\nMassa atômica: 35,4u\nEletróns: 17\nProtóns: 17\nPonto de fusão: -101,5°C\nPonto de ebulição: -34,0°C"
            )
            break

          case "3":
          case "Bromo":
          case "bromo":
            elementoEscolher = alert(
              "Sobre o bromo:\n\nSérie química: Halogênio, Não-metal, Elemento do 4º período\nSimbólo: Br\nNúmero atômico: 35\nMassa atômica: 79,9u\nEletróns: 35\nProtóns: 35\nPonto de fusão: -7,2°C\nPonto de ebulição: 58,8°C"
            )
            break

          case "4":
          case "Iodo":
          case "iodo":
            elementoEscolher = alert(
              "Sobre o iodo:\n\nSérie química: Halogênio, Não-metal, Elemento do 5º Período\nSimbólo: I\nNúmero atômico: 53\nMassa atômica: 126,9u\nEletróns: 53\nProtóns: 53\nPonto de fusão: 113,7°C\nPonto de ebulição: 184,3°C"
            )
            break

          case "5":
          case "Astato":
          case "astato":
            elementoEscolher = alert(
              "Sobre o ástato:\n\nSérie química: Halogênio, Semimetal, Elemento do 6º Período\nSimbólo: At\nNúmero atômico: 85\nMassa atômica: 210u\nEletróns: 85\nProtóns: 85\nPonto de fusão: 300°C\nPonto de ebulição: 336,8ºC"
            )
            break

          case "6":
          case "Tenesso":
          case "tenesso":
            elementoEscolher = alert(
              "Sobre o tenessino:\n\nSérie química: Halogênio, Elemento do 7º periodo\nSimbólo: Ts\nNúmero atômico: 117\nMassa atômica: 294u\nEletróns: 117\nProtóns: 117\n\nPonto de fusão ~300ºC\nPonto de ebulição: 610°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      case "8":
      case "Grupo18":
      case "grupo18":
      case "Familia8A":
      case "familia8a":
        elementoEscolher = prompt(
          "Você escolheu o grupo 18 dos Gases Nobres!\nEscolha um elemento para analisar:\n\nHélio\nNeônio\nArgônio\nCriptônio\nXenônio\nRadônio\nOganessônio"
        )

        switch (elementoEscolher) {
          case "1":
          case "Helio":
          case "helio":
            elementoEscolher = alert(
              "Sobre o hélio:\n\nSérie química: Gás nobre, Não-metal, Elemento do 1º Período\nSimbólo: He\nNúmero atômico: 2\nMassa atômica: 4u\nEletróns: 2\nProtóns: 2\nPonto de ebulição: -268,93°C\nPonto de fusão: -272°C"
            )
            break

          case "2":
          case "Neonio":
          case "neonio":
            elementoEscolher = alert(
              "Sobre o neônio:\n\nSérie química: Gás nobre, Não-metal, Elemento do 2º Período\nSimbólo: Ne\nNúmero atômico: 10\nMassa atômica: 20,1u\nEletróns: 10\nProtóns: 10\nPonto de fusão: 248,609°C\nPonto de ebulição: -246,053°C"
            )
            break

          case "3":
          case "Argonio":
          case "argonio":
            elementoEscolher = alert(
              "Sobre o argônio:\n\nSérie química: Gás nobre, Não-metal, Elemento do 3º Período\nSimbólo: Ar\nNúmero atômico: 18\nMassa atômica: 39,9u\nEletróns: 18\nProtóns: 18\nPonto de fusão: -189,4°C\nPonto de ebulição: -185,8°C"
            )
            break

          case "4":
          case "Criptonio":
          case "criptonio":
            elementoEscolher = alert(
              "Sobre o criptônio:\n\nSérie química: Gás nobre, Não-metal, Elemento do 4º período\nSimbólo: Kr\nNúmero atômico: 36\nMassa atômica: 83,7u\nEletróns: 36\nProtóns: 36\nPonto de fusão: -157,37°C\nPonto de ebulição: -153,4ºC"
            )
            break

          case "5":
          case "Xenonio":
          case "xenonio":
            elementoEscolher = alert(
              "Sobre o xenônio:\n\nSérie química: Gás nobre, Não-metal, Elemento do 5º Período\nSimbólo: Xe\nNúmero atômico: 54\nMassa atômica: 131,2u\nEletróns: 54\nProtóns: 54\nPonto de fusão: -111,74°C\nPonto de ebulição: -108,09°C"
            )
            break

          case "5":
          case "Radonio":
          case "radonio":
            elementoEscolher = alert(
              "Sobre o radônio:\n\nSérie química: Gás nobre, Não-metal, Elemento do 6º Período\nSimbólo: Rn\nNúmero atômico: 86\nMassa atômica: 222u\nEletróns: 86\nProtóns: 86\nPonto de fusão: -71°C\nPonto de ebulição: -61,7°C"
            )
            break

          case "6":
          case "Oganessonio":
          case "oganessonio":
            elementoEscolher = alert(
              "Sobre o oganessônio:\n\nSérie química: Gás nobre, Elemento do 7º periodo\nSimbólo: Og\nNúmero atômico: 118\nMassa atômica: 294u\nEletróns: 118\nProtóns: 118\nPonto de fusão: 52°C\nPonto de ebulição: 177°C"
            )
            break

          default:
            alert("[ERROR] Opção inválida.")
            location.reload()
        }
        break

      default:
        alert("[ERROR] Opção inválida.")
        location.reload()
    }
    break

  default:
    alert("[ERROR] Opção inválida.")
    location.reload()
    break
}
