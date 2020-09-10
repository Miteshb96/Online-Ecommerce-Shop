import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";

function SneakersShop() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://graphqlservice.herokuapp.com/graphql`, {
            method: 'POST',
            body: "query { Products { id name brand quantity image price} }",
            headers: { 
            'Content-Type': 'application/graphql'
            }
        })
            .then(function(response) {
                return response.json()
            })
            .then(res => {
                setData(res.data.Products)
            })
    }, [])

    return (
        <>
            {data && data.length > 0 ?
                <div class="wrapper">
                    <Grid container spacing={2} className="App-section img1">
                        <Grid container item className="product" direction="row" xs={12}>
                            <Grid item xs={12}>
                                <img
                                    className="sideImage"
                                    src={data[0].image}
                                    alt="Nike Air Jordan"
                                />
                            </Grid>
                            <Grid container item xs={5} direction="row" class="prod1 img11">
                                <Grid item xs={12}>{`${data[0].brand} - ${data[0].name}`}</Grid>
                                <Grid item xs={12}>{data[0].price} </Grid> 
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="side-section">
                        <Grid container item className="product img2" direction="row" xs={6}>
                            <Grid item xs={12}>
                                <img
                                    className="sideImage1"
                                    src={data[1].image}
                                    alt="GeeksforGeeks logo"
                                />
                            </Grid>
                            <Grid container item xs={12} direction="row" class="prod2 img21">
                                <Grid item xs={12}>{`${data[1].brand} - ${data[1].name}`}</Grid>
                                <Grid item xs={12}>{data[1].price} </Grid> 
                            </Grid>
                        </Grid>
                        <Grid container item className="product img3" direction="row" xs={6}>
                            <Grid item xs={12}>
                                <img
                                    className="sideImage1"
                                    src={data[2].image}
                                    alt="GeeksforGeeks logo"
                                />
                            </Grid>
                            <Grid container item xs={12} direction="row" class="prod3 img31">
                                <Grid item xs={12}>{`${data[2].brand} - ${data[2].name}`}</Grid>
                                <Grid item xs={12}>{data[2].price} </Grid> 
                            </Grid>
                        </Grid>
                        <Grid container item className="product img4" direction="row" xs={6}>
                            <Grid item xs={12}>
                                <img
                                    className="sideImage1"
                                    src={data[3].image}
                                    alt="GeeksforGeeks logo"
                                />
                            </Grid>
                            <Grid container item xs={12} direction="row" class="prod2 img41">
                                <Grid item xs={12}>{`${data[3].brand} - ${data[3].name}`}</Grid>
                                <Grid item xs={12}>{data[3].price} </Grid> 
                            </Grid>
                        </Grid>
                        <Grid container item className="product img5" direction="row" xs={6}>
                            <Grid item xs={12}>
                                <img
                                    className="sideImage1"
                                    src={data[4].image}
                                    alt="GeeksforGeeks logo"
                                />
                            </Grid>
                            <Grid container item xs={12} direction="row" class="prod3 img51">
                                <Grid item xs={12}>{`${data[4].brand} - ${data[4].name}`}</Grid>
                                <Grid item xs={12}>{data[4].price} </Grid> 
                            </Grid>
                        </Grid>
                    </Grid>
                </div> 
                : null
            }
        </>
    )
}

export default SneakersShop; 