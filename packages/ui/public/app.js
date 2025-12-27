function download(){
    const url =  (document.getElementById('url') as HTMLInputElement).value;
    if(!url) return alert("Please enter a valid URL");
    window.location.href = `/download?url=${encodeURIComponent(url)}`;23
}