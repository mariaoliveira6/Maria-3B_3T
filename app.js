// A placeholder for getCSS since it's not defined in the original snippet
// For a real-world scenario, you would need to implement this function
function getCSS(prop) {
    if (prop === '--bg-color') return '#ffffff';
    if (prop === '--secundary-color') return '#333333';
    if (prop === '--font') return 'Arial, sans-serif';
}

async function empregos() {
    const url = 'https://raw.githubusercontent.com/timreis/api/refs/heads/main/mariaclara.json';
    
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const dados = await res.json();
        const nomeX = Object.keys(dados);
        const ouvintes = Object.values(dados);

        const data = [{
            labels: nomeX,
            values: ouvintes,
            type: 'bar',
            marker: {
                colors: ['#ff7f0e', '#1f77b4', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
            }
        }];

        const layout = {
            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            title: {
                text: 'Artistas mais ouvidos 2024',
                font: {
                    color: getCSS('--secundary-color'),
                    family: getCSS('--font'),
                    size: 28
                }
            },
            xaxis: {
                title: {
                    text: 'Artistas',
                    font: {
                        color: getCSS('--secundary-color'),
                        family: getCSS('--font'),
                        size: 18
                    }
                },
                tickfont: {
                    family: getCSS('--font'),
                    color: getCSS('--secundary-color')
                }
            },
            yaxis: {
                title: {
                    text: 'Número de reproduções',
                    font: {
                        color: getCSS('--secundary-color'),
                        family: getCSS('--font'),
                        size: 18
                    }
                },
                tickfont: {
                    family: getCSS('--font'),
                    color: getCSS('--secundary-color')
                }
            },
            height: 600,
            width: 870
        };

        const grafico = document.createElement('div');
        grafico.className = 'grafico';
        document.getElementById('graficos-container').appendChild(grafico);

        Plotly.newPlot(grafico, data, layout);

    } catch (error) {
        console.error("Erro ao carregar os dados ou gerar o gráfico:", error);
    }
}

empregos();