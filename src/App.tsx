import { useCallback, useState } from "react";
import { Button, Flex, Form, Input, Layout, Table, Typography } from "antd";
import { FormattedMessage, IntlProvider } from "react-intl";
import "./assets/styles/style.sass";

const { Paragraph, Title } = Typography;
import HeaderComponent from "./components/Header/Header";
import { columns, rows } from "./datas";
import ModalComponent from "./components/Modal/Modal";
import message_en from "./translations/en.json";
import message_ja from "./translations/ja.json";

type Locale = "en" | "ja";

const initState = {
  isSelected: false,
  keySelected: null,
  datas: null,
};

const messages = {
  en: message_en,
  ja: message_ja,
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState<any>(initState);
  const [locale, setLocale] = useState<Locale>("ja");

  const changeLanguage = useCallback((selectedLocale: Locale) => {
    setLocale(selectedLocale);
  }, []);

  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout>
          <HeaderComponent />
          <Layout className="content">
            <Title level={1} className="content__heading-large">
              <FormattedMessage id="content.heading_large" />
            </Title>
            <Title level={3} className="content__heading-base">
              <FormattedMessage id="content.heading_base" />
            </Title>
            <Flex gap={"8px"} align="center" className="content__infor">
              <Paragraph className="content__label">
                <FormattedMessage id="content.labelFullName" />
              </Paragraph>
              <Paragraph className="content__description">
                : <FormattedMessage id="content.fullName" />
              </Paragraph>
            </Flex>
            <Flex gap={"8px"} align="center" className="content__infor">
              <Paragraph className="content__label">
                <FormattedMessage id="content.labelEmail" />
              </Paragraph>
              <Paragraph className="content__description">
                : Nguyenvana@gmail.com
              </Paragraph>
            </Flex>
            <Form
              className="content__form"
              onFinish={() =>
                setIsModalOpen((state: any) => ({
                  ...state,
                  isSelected: state.keySelected ? true : false,
                }))
              }
            >
              <Flex gap={"16px"}>
                <Input
                  className="content__input"
                  placeholder={
                    locale == "en"
                      ? message_en["content.labelEmail"]
                      : message_ja["content.labelEmail"]
                  }
                />
                {
                  isModalOpen.keySelected &&
                <Button className="content__btn" htmlType="submit">
                  <FormattedMessage id="content.searchButton" />
                </Button>
                }
              </Flex>
            </Form>
            <div className="content__table">
              <Table
                columns={columns as any}
                dataSource={rows}
                scroll={{
                  x: 2550,
                }}
                rowSelection={{
                  type: "radio",
                  selectedRowKeys: isModalOpen.keySelected
                    ? [isModalOpen.keySelected]
                    : [],
                  onChange: ([key], [selectedRows]) => {
                    setIsModalOpen((state: any) => ({
                      ...state,
                      keySelected: key,
                      datas: selectedRows,
                    }));
                  },
                }}
              />
              <div>
                <ul className="content__pagination">
                  <li>
                    <svg
                      width={8}
                      height={12}
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.0384 5.53864C0.88217 5.69491 0.794407 5.90684 0.794407 6.12781C0.794407 6.34878 0.88217 6.5607 1.0384 6.71697L5.75256 11.4311C5.82943 11.5107 5.92139 11.5742 6.02306 11.6179C6.12473 11.6616 6.23408 11.6846 6.34473 11.6855C6.45538 11.6865 6.56511 11.6654 6.66752 11.6235C6.76994 11.5816 6.86298 11.5197 6.94123 11.4415C7.01947 11.3632 7.08135 11.2702 7.12325 11.1678C7.16515 11.0654 7.18623 10.9556 7.18527 10.845C7.18431 10.7343 7.16132 10.625 7.11765 10.5233C7.07397 10.4216 7.01049 10.3297 6.9309 10.2528L2.8059 6.12781L6.9309 2.00281C7.08269 1.84564 7.16669 1.63514 7.16479 1.41664C7.16289 1.19814 7.07525 0.989131 6.92075 0.834624C6.76624 0.680118 6.55723 0.592476 6.33873 0.590577C6.12023 0.588678 5.90973 0.672674 5.75256 0.824472L1.0384 5.53864Z"
                        fill="#646464"
                      />
                    </svg>
                  </li>
                  <li className="content__pagination--number">1</li>
                  <li>
                    <svg
                      width={8}
                      height={12}
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.94134 5.53864C7.09757 5.69491 7.18533 5.90684 7.18533 6.12781C7.18533 6.34878 7.09757 6.5607 6.94134 6.71697L2.22717 11.4311C2.1503 11.5107 2.05835 11.5742 1.95668 11.6179C1.85501 11.6616 1.74566 11.6846 1.63501 11.6855C1.52436 11.6865 1.41463 11.6654 1.31221 11.6235C1.2098 11.5816 1.11676 11.5197 1.03851 11.4415C0.960267 11.3632 0.89839 11.2702 0.856489 11.1678C0.814588 11.0654 0.793504 10.9556 0.794465 10.845C0.795427 10.7343 0.818415 10.625 0.862089 10.5233C0.905763 10.4216 0.969248 10.3297 1.04884 10.2528L5.17384 6.12781L1.04884 2.00281C0.897042 1.84564 0.813047 1.63514 0.814945 1.41664C0.816844 1.19814 0.904485 0.989131 1.05899 0.834624C1.2135 0.680118 1.42251 0.592476 1.64101 0.590577C1.8595 0.588678 2.07001 0.672674 2.22717 0.824472L6.94134 5.53864Z"
                        fill="#646464"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </Layout>
          <Flex gap="small" wrap>
            <Button type="primary" onClick={() => changeLanguage("ja")}>
              Japan
            </Button>
            <Button onClick={() => changeLanguage("en")}>English</Button>
          </Flex>
        </Layout>
        <ModalComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </IntlProvider>
    </>
  );
}

export default App;
