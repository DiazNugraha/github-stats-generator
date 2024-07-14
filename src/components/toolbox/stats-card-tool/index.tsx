import { Combobox } from "@/components/combobox";
import TextField from "@/components/text-field";
import { BOOLEAN_OPTIONS } from "@/constants/common";
import {
  HIDE_OPTIONS,
  SHOW_OPTIONS,
  THEME_OPTIONS,
} from "@/constants/stats_tool";
import { MainProperties } from "@/types/common";
import { useDebounce } from "@/utils/use-debounce";
import { useState } from "react";

export interface StatsCardToolProps {
  onFetch: (properties: MainProperties) => void;
}

export default function StatsCardTool(props: StatsCardToolProps) {
  const { onFetch } = props;
  const [properties, setProperties] = useState<MainProperties>({
    username: "",
    hide: [],
    show: [],
    show_icons: "true",
    theme: "gruvbox",
  });

  const sendProperties = () => {
    if (properties.username.length == 0) {
      return;
    }

    onFetch(properties);
  };

  useDebounce(properties, 500, sendProperties);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex w-full gap-2">
        <div className="flex-1">
          <TextField
            label="Username"
            onChange={(e) =>
              setProperties({ ...properties, username: e.target.value })
            }
          />
        </div>
        <div className="flex-1">
          <Combobox
            label="Hide"
            isMulti
            options={HIDE_OPTIONS}
            onChange={(e) =>
              setProperties({
                ...properties,
                hide: e.map((item) => item.value),
              })
            }
          />
        </div>
      </div>

      <div className="flex w-full gap-2">
        <div className="flex-1">
          <Combobox
            label="Show Additional Individual Stats"
            options={SHOW_OPTIONS}
            isMulti
            onChange={(e) =>
              setProperties({
                ...properties,
                show: e.map((item) => item.value),
              })
            }
          />
        </div>
        <div className="flex-1">
          <Combobox
            label="Show Icons"
            options={BOOLEAN_OPTIONS}
            onChange={(e) =>
              setProperties({ ...properties, show_icons: String(e?.value) })
            }
          />
        </div>
      </div>

      <div className="flex w-full gap-2">
        <div className="flex-1">
          <Combobox
            label="Theme"
            options={THEME_OPTIONS}
            onChange={(e) =>
              setProperties({ ...properties, theme: String(e?.value) })
            }
          />
        </div>
      </div>
    </div>
  );
}
