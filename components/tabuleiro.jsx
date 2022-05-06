import style from './tabuleiro.module.css';

const Tabuleiro = () =>{
    const config = {
        x: 8,
        y: 8,
        som: 0,
        body: new Array()
    }

    for(let y = 0; y < config.y; y++){
        config.body.push([])
        for(let x = 0; x < config.x; x++){
            if(config.som % 2 == 0){
                config.body[y].push(<div className={style.white}></div>)
            }else{
                config.body[y].push(<div className={style.black}></div>)
            }

            config.som++;
        }
        config.som ++;
    }
    

    return (
        <>
            <div className="tabuleiro">
                {config.body.map((item, key) => (
                    <div className={style.row} key={key}>
                        {item.map((span) => (
                            span
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Tabuleiro;