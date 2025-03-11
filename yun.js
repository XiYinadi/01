async function  add() {

    const input = document.getElementById('main').value;

    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    await axios({
        url:'https://cu1nihdgru.hzh.sealos.run/submitdata',
        method: 'POST',
        data: {
            title: input,
            time: timestamp,
        }
    })
    console.log("已发送");
    
}
