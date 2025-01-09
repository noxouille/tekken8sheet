import { useState } from "react";
import styled from "@emotion/styled";
import { SheetType } from "./types";
import TxtImporter from "./components/TxtImporter/TxtImporter";
import { Sheet } from "./components/Sheet/Sheet";
import { Move } from "./components/Move/Move";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const RightPanel = styled.div`
  flex: 1.5;
`;

const InputList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin-bottom: 20px;

  img {
    width: 30px;
  }
`;

const SourceCode = styled.pre`
  border: thin solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 300px; /* Adjust as needed */
`;

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

  return (
    <Container>
      <LeftPanel>
        {data ? (
          <div>
            <div css={{ display: "flex", justifyContent: "flex-end" }}>
              <TxtImporter onChange={setData} />
            </div>
            {data && <Sheet data={data} />}
          </div>
        ) : (
          <>
            <div
              css={{
                fontSize: 32,
                textAlign: 'center',
                marginBottom: 20,
              }}
            >
              Select a txt file to get started.
            </div>
            <TxtImporter onChange={setData} />

            <InputList>
              <span>u</span>
              <Move move={{ inputs: ["u"] }} />
              <span>d</span>
              <Move move={{ inputs: ["d"] }} />
              {/* ... other input elements ... */}
            </InputList>

            <div>
              <span>Source</span>
              <SourceCode>
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
              </SourceCode>
            </div>
          </>
        )}
      </LeftPanel>

      <RightPanel>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Output Preview</h2>
          <div className="border border-gray-200 rounded p-4">
            <Sheet data={ninaDemo} />
          </div>
        </div>
      </RightPanel>
    </Container>
  );
}

export default App;