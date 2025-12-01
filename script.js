
   
    for (let i = 0; i < 30; i++) {
        const h = document.createElement("div")
        h.className = "heart"
        h.innerHTML = "❤"
        h.style.left = Math.random() * 100 + "vw"
        h.style.animationDuration = 4 + Math.random() * 4 + "s"
        document.body.appendChild(h)
    }

    const btnNao = document.getElementById("nao")
    const btnSim = document.getElementById("sim")

   btnNao.addEventListener("click", () => {

    const area = document.querySelector("#nao-area")
    const bw = btnNao.offsetWidth
    const bh = btnNao.offsetHeight

    const maxX = area.clientWidth - bw
    const maxY = area.clientHeight - bh

    let x = Math.random() * maxX
    let y = Math.random() * maxY

    btnNao.style.left = x + "px"
    btnNao.style.top = y + "px"

   
    let size = parseFloat(btnNao.dataset.scale || "1")
    size -= 0.1

    if (size <= 0.2) {
        btnNao.style.display = "none"
        return
    }

    btnNao.dataset.scale = size
    btnNao.style.transform = `scale(${size})`
})




    btnSim.addEventListener("click", () => {
        const msg = document.createElement("div")
        msg.style.position = "fixed"
        msg.style.top = "50%"
        msg.style.left = "50%"
        msg.style.transform = "translate(-50%, -50%)"
        msg.style.background = "white"
        msg.style.padding = "30px"
        msg.style.borderRadius = "20px"
        msg.style.boxShadow = "0 0 20px rgba(0,0,0,0.1)"
        msg.style.fontSize = "22px"
        msg.style.textAlign = "center"
        msg.style.zIndex = "100"
        msg.innerHTML = "eu te amo, há muito tempo eu comecei a te mandar mensagens no instagram, eu sempre me pegava lembrando de vc, e encho de mensagens pra vc me notar. e de tanto te admirar, notei que vc é uma garota que combina com todas as cores. catherine, uam garota inteligente, a mais cheirosa de sp, linda de corpo e alma, mais romantica que eu, minha companheira e faz uns pudins maravilhosos. sei que voce adora cogumelos, ama assistir um dorama e tem um otimo gosto musical. é uma taurina, elemento terra, arcano pessoal estrela. as vezes é preguiçosa assim como eu, mas nunca vi ela desistir de nada, nem fazer nada mal feito. esse texto é pra minha amada. vc sabe que pode contar comigo pra tudo, oq for, eu vou estar contigo. te amar, mesmo de longe, me faz bem, me faz feliz, me faz querer viver, obrigado por existir no mesmo mundo que eu. eu te amo!<br>agora vem cá 💖"

        document.body.appendChild(msg)
    })




