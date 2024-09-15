function countdown() {
    setTimeout(() => {
        h1.innerText='10';
        div.style.backgroundImage = "url('images/vallabai.png')";
        div.style.backgroundSize ="cover";
        div.style.backgroundPosition='center';
        setTimeout(() => {
            h1.innerText='9'
            div.style.backgroundImage = "url('images/bharathiyar.png')";
            div.style.backgroundSize ="cover";
            setTimeout(() => {
                h1.innerText='8'
                div.style.backgroundImage = "url('images/kattabomman.png')";
                div.style.backgroundSize ="cover";
                setTimeout(() => {
                    h1.innerText='7'
                    div.style.backgroundImage = "url('images/marudhu.png')";
                    div.style.backgroundSize ="cover";
                    setTimeout(() => {
                        h1.innerText='6'
                        div.style.backgroundImage = "url('images/jansi.png')";
                        div.style.backgroundSize ="cover";
                        setTimeout(() => {
                            h1.innerText='5'
                            div.style.backgroundImage = "url('images/ambedhkar.png')";
                            div.style.backgroundSize ="cover";
                            setTimeout(() => {
                                h1.innerText='4'
                                div.style.backgroundImage = "url('images/nehru.png')";
                                div.style.backgroundSize ="cover";
                                setTimeout(() => {
                                    h1.innerText='3'
                                    div.style.backgroundImage = "url('images/baghat.png')";
                                    div.style.backgroundSize ="cover";
                                    setTimeout(() => {
                                        h1.innerText='2'
                                        div.style.backgroundImage = "url('images/subhash.png')";
                                        div.style.backgroundSize ="cover";
                                        setTimeout(() => {
                                            h1.innerText='1'
                                            div.style.backgroundImage = "url('images/gandhi.png')";
                                            div.style.backgroundSize ="cover";
                                            setTimeout(() => {
                                                var h1=document.getElementById('h1');
                                                h1.innerText='🏆Happy Independence day🏆';
                                                var div=document.getElementById('div');
                                                div.style.backgroundImage = "url('images/flag.png')";
                                                div.style.backgroundSize ="cover";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

countdown();

