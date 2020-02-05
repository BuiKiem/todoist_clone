import React from "react";
import { blue, green, purple } from "@material-ui/core/colors";
import {
  Inbox as InboxIcon,
  Today as TodayIcon,
  DateRange as DateRangeIcon
} from "@material-ui/icons";

export const defaultProjects = [
  {
    id: "INBOX",
    name: "Inbox",
    icon: <InboxIcon style={{ color: blue[500] }} />
  },
  {
    id: "TODAY",
    name: "Today",
    icon: <TodayIcon style={{ color: green[500] }} />
  },
  {
    id: "NEXT7",
    name: "Next 7 days",
    icon: <DateRangeIcon style={{ color: purple[500] }} />
  }
];
