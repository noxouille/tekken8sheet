import { useState } from "react";
import { SheetType } from "./types";
import TxtImporter from "./components/TxtImporter/TxtImporter";
import { Sheet } from "./components/Sheet/Sheet";
import { Move } from "./components/Move/Move";

const ninaDemo: SheetType = {
    title: "Nina",
    categories: [
        {
            title: "Neutral",
            moves: [
                {
                    inputs: ["df", "1", "2"],
                    hint: "pressure with extensions",
                },
                {
                    inputs: ["d", "df", "f"],
                    hint: "step stance",
                },
                {
                    inputs: ["1+4"],
                    hint: "mid grounded force crouch",
                }
            ]
        },
        {
            title: "Launcher",
            moves: [
                {
                    inputs: ["df", "2"],
                    hint: "safe mid launcher",
                },
                {
                    inputs: ["b", "1+4"],
                    hint: "launcher",
                }
            ]
        },
        {
            title: "Lows",
            moves: [
                {
                    inputs: ["d", "3", "4", "3"],
                    hint: "CH string",
                },
                {
                    inputs: ["db", "3"],
                    hint: "",
                }
            ]
        },
        {
            title: "Punish",
            moves: [
                {
                    inputs: ["1", "4"],
                    hint: "10f",
                },
                {
                    inputs: ["uf", "2"],
                    hint: "15f",
                }
            ]
        }
    ]
}

export function App() {
    const [data, setData] = useState<SheetType | undefined>();

    if (data) {
        return (
          <div className="p-4">
            <div className="flex justify-end mb-4">
              <TxtImporter onChange={setData} />
            </div>
            {data && <Sheet data={data} />}
          </div>
        );
    } 
    else {
        return (
            <div
                css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    flexGrow: 1,
                }}
            >
                <div
                    css={{
                        fontSize: 32,
                    }}
                >
                    Select a txt file to get started.
                </div>

                <TxtImporter onChange={setData} />

                <div className="w-full max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>                
                {/* Input Reference Section */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-4">List of recognized inputs</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 font-medium">Directional Inputs</div>
                        {[
                            ['u', 'u'],
                            ['d', 'd'],
                            ['f', 'f'],
                            ['b', 'b'],
                            ['uf', 'uf'],
                            ['ub', 'ub'],
                            ['df', 'df'],
                            ['db', 'db'],
                        ].map(([input, label]) => (
                            <div key={input} className="flex items-center gap-2">
                                <span className="w-16">{input}</span>
                                <Move move={{ inputs: [input] }} />
                            </div>
                        ))}

                        <div className="col-span-2 font-medium mt-4">Button Inputs</div>
                        {[
                            ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'],
                            ['1+2', '1+2'], ['1+3', '1+3'], ['1+4', '1+4'], 
                            ['2+3', '2+3'], ['2+4', '2+4'], ['3+4', '3+4'],
                            ['1+2+3+4', '1+2+3+4']
                        ].map(([input]) => (
                            <div key={input} className="flex items-center gap-2">
                                <span className="w-16">{input}</span>
                                <Move move={{ inputs: [input] }} />
                            </div>
                        ))}

                        <div className="col-span-2 font-medium mt-4">Special Inputs</div>
                        {[
                            ['bracketl', 'bracketl'],
                            ['bracketr', 'bracketr'],
                            ['fhold', 'fhold'],
                            ['n', 'n'],
                            ['into', 'into'],
                        ].map(([input, label]) => (
                            <div key={input} className="flex items-center gap-2">
                                <span className="w-16">{input}</span>
                                <Move move={{ inputs: [input] }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Source Example Section */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-4">Source Example</h2>
                    <pre className="text-sm bg-gray-50 p-4 rounded overflow-x-auto">
{`Nina

# Neutral
df 1 2 (pressure with extensions)
d df f (step)
1+4 (mid grounded force crouch)

# Launcher
df 2 (safe mid launcher)
b 1+4 (launcher)

# Lows
d 3 4 3 (CH string)
db 3

# Punish
1 4 (10f)
uf 2 (15f)`}
                    </pre>
                </div>

                {/* Output Preview Section */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-4">Output Preview</h2>
                    <div className="border border-gray-200 rounded p-4">
                        <Sheet data={ninaDemo} />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
