import { InputsType, MoveType, PropertiesType } from "../../types";

import input1 from "../../assets/1.webp";
import input2 from "../../assets/2.webp";
import input3 from "../../assets/3.webp";
import input4 from "../../assets/4.webp";
import input1_2 from "../../assets/1+2.webp";
import input1_3 from "../../assets/1+3.webp";
import input1_4 from "../../assets/1+4.webp";
import input2_3 from "../../assets/2+3.webp";
import input2_4 from "../../assets/2+4.webp";
import input3_4 from "../../assets/3+4.webp";
import input1_2_3_4 from "../../assets/1+2+3+4.webp";
import inputu from "../../assets/u.webp";
import inputd from "../../assets/d.webp";
import inputf from "../../assets/f.webp";
import inputb from "../../assets/b.webp";
import inputuf from "../../assets/uf.webp";
import inputub from "../../assets/ub.webp";
import inputdf from "../../assets/df.webp";
import inputdb from "../../assets/db.webp";
import inputbhold from "../../assets/bhold.webp";
import inputbracketl from "../../assets/bracketl.webp";
import inputbracketr from "../../assets/bracketr.webp";
import inputdbhold from "../../assets/dbhold.webp";
import inputdfhold from "../../assets/dfhold.webp";
import inputdhold from "../../assets/dhold.webp";
import inputfhold from "../../assets/fhold.webp";
import inputn from "../../assets/n.webp";
import inputubhold from "../../assets/ubhold.webp";
import inputufhold from "../../assets/ufhold.webp";
import inputuhold from "../../assets/uhold.webp";
import inputss from "../../assets/ss.webp";
import inputssl from "../../assets/ssl.webp";
import inputssr from "../../assets/ssr.webp";
import inputwr from "../../assets/wr_running.webp";
import inputws from "../../assets/ws_standing.webp";

import propchip from "../../assets/chip.webp";
import propheat from "../../assets/heat.webp";
import prophoming from "../../assets/homing.webp";
import proppowercrush from "../../assets/powercrush.webp";
import proptornado from "../../assets/tornado.webp";
import propbalconybreak from "../../assets/Balconybreak.webp";
import propfloorblast from "../../assets/Floorblast.webp";
import propfloorbreak from "../../assets/Floorbreak.webp";
import propinto from "../../assets/into.webp";
import propwallblast from "../../assets/Wallblast.webp";
import propwallbreak from "../../assets/Wallbreak.webp";
import propch from "../../assets/ch.webp";
import propwallbound from "../../assets/Wallbound.webp";

const inputImageMap: Record<string, string> = {
  "1": input1,
  "2": input2,
  "3": input3,
  "4": input4,
  u: inputu,
  d: inputd,
  f: inputf,
  b: inputb,
  uf: inputuf,
  ub: inputub,
  df: inputdf,
  db: inputdb,
  "1+2": input1_2,
  "1+3": input1_3,
  "1+4": input1_4,
  "2+3": input2_3,
  "2+4": input2_4,
  "3+4": input3_4,
  "1+2+3+4": input1_2_3_4,
  bhold: inputbhold,
  bracketl: inputbracketl,
  bracketr: inputbracketr,
  dbhold: inputdbhold,
  dfhold: inputdfhold,
  dhold: inputdhold,
  fhold: inputfhold,
  n: inputn,
  ubhold: inputubhold,
  ufhold: inputufhold,
  uhold: inputuhold,
  ss: inputss,
  ssl: inputssl,
  ssr: inputssr,
  wr: inputwr,
  ws: inputws,
  into: propinto,
  chip: propchip,
  heat: propheat,
  homing: prophoming,
  powercrush: proppowercrush,
  tornado: proptornado,
  balconybreak: propbalconybreak,
  floorblast: propfloorblast,
  floorbreak: propfloorbreak,
  wallblast: propwallblast,
  wallbound: propwallbound,
  wallbreak: propwallbreak,
  counterhit: propch,
};

const propertiesImageMap: Record<PropertiesType, string> = {
    "chip": propchip,
    "heat": propheat,
    "homing": prophoming,
    "powercrush": proppowercrush,
    "tornado": proptornado,
}

export function Move({ move }: { move: MoveType }) {
    return (
        <>
            <div css={{ display: "flex", gap: 5, alignItems: "center" }}>
                {
                    move.inputs.map((input, index) => (
                        input in inputImageMap ? <img key={index} src={inputImageMap[input]} alt={`Input ${input}`} /> : <span key={index}>{input}</span>
                    ))
                }
            </div>

            <div css={{ display: "flex", gap: 5, alignItems: "center" }}>
                {
                    move.hitProperties &&
                        move.hitProperties.map((hitProp, index) => (
                            hitProp in propertiesImageMap && <img src={propertiesImageMap[hitProp]} alt={`Hit property ${hitProp}`} />
                        ))
                }
            </div>

            <span>
                {
                    move.hint
                }
            </span>
        </>
    );
}