const db = firebase.firestore()

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}

findTransactions();

function findTransactions() {
    firebase.firestore()
        .collection('liberação')
        .get()
        .then(snapshot => {
            const liberacao = snapshot.docs.map(doc => doc.data());
            addTransactionsToScreen(liberacao);
        })
}

function addTransactionsToScreen(liberacao)
{
    console.log('achei');
}

function openGarbage()
{
    db.collection('liberação').doc('c5ocuuBspLfKGuaDP7a2')
    .update({ aberto: true })
    .then(() => {
        console.log('Documento Atualizado');
    }).catch(e => {
        console.log('Documento Não Atualizado', e);
    })
}

function closeGarbage()
{
    db.collection('liberação').doc('c5ocuuBspLfKGuaDP7a2')
    .update({ aberto: false })
    .then(() => {
        console.log('Documento Atualizado');
    }).catch(e => {
        console.log('Documento Não Atualizado', e);
    })
}

