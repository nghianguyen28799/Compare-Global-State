import { PageContainer } from "@ant-design/pro-components";
import "./App.sass";
import React, { useCallback, useMemo, useState } from "react";
import { Segmented, Typography } from "antd";
import { SegmentedValue } from "antd/es/segmented";
import Redux from "./Components/Redux";
import Zustand from "./Components/Zustand";
import Signal from "./Components/Signal";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store";

const { Title } = Typography;

enum EOptions {
  Redux = "Redux",
  Zustand = "Zustand",
  Signal = "Preact Signal",
}

function App() {
  const options = useMemo<SegmentedValue[]>(
    () => [EOptions.Redux, EOptions.Zustand, EOptions.Signal],
    []
  );
  const [value, setValue] = useState<SegmentedValue>(options[0]);

  const _renderElement = useMemo(() => {
    switch (value) {
      case EOptions.Redux:
        return Redux;

      case EOptions.Zustand:
        return Zustand;

      default:
        return Signal;
    }
  }, [value]);

  const Element = _renderElement;

  return (
    <PageContainer className="container-page">
      <div className="layout">
        <Segmented
          options={options}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <div className="title">
          <Title level={2}>To Do List</Title>
        </div>
        <Provider store={store}>
          <Element />
        </Provider>
      </div>
    </PageContainer>
  );
}

export default App;
