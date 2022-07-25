import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { userSelector } from "../../features/auth";

const Profile = () => {
  const { user } = useSelector(userSelector);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/filmpire";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
