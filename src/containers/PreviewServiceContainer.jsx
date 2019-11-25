import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import FetchData from "../hooks/FetchData";
import { PreviewService } from "../components/PreviewService";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ShowError } from "../components/ShowError";
import { connect } from "react-redux";
import PopupContainer from "./PopupContainer";

function PreviewServiceContainer(props) {
  let { id } = useParams();
  const api_url = `http://localhost:8000/services`;
  const url = `${api_url}/${id}`;
  const { isFetching, isError, isSuccess } = props.user;
  const [service, { isLoading, isError: isErrorFetching }] = FetchData(url);

  return (
    <>
      {isLoading || isFetching ? (
        <LoadingSpinner />
      ) : isError || isErrorFetching ? (
        <ShowError
          errorMessage="Сервер не отвечает :c"
          gif="https://media.giphy.com/media/kd3uvnVNZaFnXepecO/giphy.gif"
        />
      ) : isLoading || isFetching ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <PopupContainer text="Успешно :)" />
      ) : (
        <PreviewService service={service} />
      )}
    </>
  );
}

const mapStateToProps = state => ({
  user: state
});

export default connect(mapStateToProps)(PreviewServiceContainer);

PreviewServiceContainer.propTypes = {
  user: PropTypes.object
};
