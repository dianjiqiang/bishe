import React, { memo, useCallback, useState } from "react";
import { NotFoundStyled } from "./styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = memo(() => {
  const navigate = useNavigate();
  const [stNumber, setStNumber] = useState(1);
  const changeSeTu = useCallback(() => {
    if (stNumber < 4) {
      setStNumber(stNumber + 1);
    } else {
      setStNumber(1);
    }
  }, [stNumber]);
  const goToXianzhemoshi = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  return (
    <NotFoundStyled>
      <img
        className="st-class"
        onClick={changeSeTu}
        src={require("@/assets/image/kanhuisetu/" + stNumber + ".jpg")}
        alt="色图加载不出来辣 难受难受..想哭---"
      />
      <Button
        variant="contained"
        className="xianzhemoshi"
        onClick={goToXianzhemoshi}
      >
        滚蛋, 不要影响我写代码呜呜呜---
      </Button>
    </NotFoundStyled>
  );
});

export default NotFound;
