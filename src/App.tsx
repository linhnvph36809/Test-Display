import { useCallback, useState } from "react";
import { IntlProvider } from "react-intl";
import "./assets/styles/style.sass";
import message_en from "./translations/en.json";
import message_ja from "./translations/ja.json";
import { Button, Flex } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router";

type Locale = "en" | "ja";

const messages = {
  en: message_en,
  ja: message_ja,
};

function App() {
  const [locale, setLocale] = useState<Locale>("ja");

  const changeLanguage = useCallback((selectedLocale: Locale) => {
    setLocale(selectedLocale);
  }, []);

  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
      <RouterProvider router={router} />
      </IntlProvider>
      {/* <Flex gap="small" wrap>
        <Button type="primary" onClick={() => changeLanguage("ja")}>
          Japan
        </Button>
        <Button onClick={() => changeLanguage("en")}>English</Button>
      </Flex> */}
    </>
  );
}

export default App;
