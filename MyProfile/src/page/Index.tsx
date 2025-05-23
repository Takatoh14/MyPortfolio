import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import SNS from "../components/Sns";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  // useLocationで現在のURLやstateの情報を取得
  // ページ遷移時にnavigateのstateを利用してスクロール位置を制御するために使用
  const location = useLocation();

  // location.stateが変わるたびに実行される副作用（useEffect）
  useEffect(() => {
    // location.stateが存在し、オブジェクトであることを確認
    if (location.state && typeof location.state === "object") {
      // location.stateからscrollToId（スクロール先の要素ID）を取り出す
      const { scrollToId } = location.state as { scrollToId?: string };

      // scrollToIdが存在する場合
      if (scrollToId) {
        // 指定されたIDの要素を取得
        const el = document.getElementById(scrollToId);
        if (el) {
          // 取得した要素までスクロール（behavior: "auto" は即座にスクロール）
          el.scrollIntoView({ behavior: "auto" });

          // ※必要に応じて、ここでstateをクリアしたい場合は
          // navigate("/", { state: {} }); のように状態を空にできる
          // そうしないと、再度このuseEffectが動いてしまう可能性がある
        }
      }
    }
  }, [location.state]); // location.stateの変化を監視

  // JSXの描画部分
  return (
    <>
      {/* 共通のヘッダー */}
      <Header />

      {/* プロフィールセクション */}
      <Profile />

      {/* Aboutセクション。スクロール先のID要素がここにある */}
      <About />

      {/* SNSセクション */}
      <SNS />

      {/* フッター */}
      <Footer />
    </>
  );
};

export default Index;
