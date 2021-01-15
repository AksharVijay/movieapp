import React, { Component } from 'react';
import kgf from '../kgf.jpg';
import Title from '../Title/Title';
import './Details.css';

class Details extends Component {
    render() {
        return (
            <div>
                <Title/>
                <div className="container">
                    <div className="row">
                        <div className ="col-md-4">
                            <img src={kgf} alt='movie' className="detimg"/>
                        </div>
                        <div className="col-md-8">
                            <div className="detailsTitle">
                                <strong>Title: </strong> KGF
                            </div>
                            <div className="detailsInfo">
                                2017 | 2:30 | Prashanth Neel
                            </div>
                            <div className="detailsCast">
                                <strong>
                                    Cast:
                                </strong>
                                Yash | Srindhi Shetty  
                            </div>
                            <p className="detailsDesc">
                             <strong> Movie Description: </strong>Journalist Anand Ingalagi's book titled El Dorado, that detailed events at the Kolar Gold Fields between 1951 and 2018, has been banned by the Government of India and all published copies burnt. However, a television news channel procures a copy and interviews him circling the events he had cited.

Ingalagi narrates that ore of gold was discovered by commissioned government officials in the southern part of India's Mysore State (in present-day Kolar district, Karnataka) in 1951. Rocky is also born on the day of the discovery in the Mysore region, to a poor and widowed woman. Suryavardhan, a local don who accompanied the officials, kills them. Discerning the increasing demand for gold by the Cold War belligerents, Suryavardhan deceitfully sets up a company, Narachi, in that land, bought for a lease of 99 years under the pretext of mining limestone. He has five associates, all of whom operate away from KGF: Kamal, the son of a former associate Bharghav; Andrews ,Rajendra Desai - who oversee operations in the Konkan and Malabar Coasts; Guru Pandian, a powerful politician and president of the DYSS party; and brother Adheera. However, each of them has their eyes on the mines. Andrews' underboss Shetty is a gold smuggler in Bombay, the city that also has another smuggler, Dubai-based Inayat Khalil's eyes set on. 
                            </p>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Details;
