import { useId } from "react";
import { twMerge } from "tailwind-merge";
import Select from "react-select";
import { GroupBase } from "react-select";
import { Props } from "react-select";

type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  label?: string;
  classLabel?: string;
};

export const Combobox = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  properties: SelectProps<Option, IsMulti, Group>
) => {
  const id = useId();
  const { label, classLabel, ...props } = properties;
  return (
    <div className="flex flex-col gap-y-2">
      {label !== undefined && (
        <label
          htmlFor={id}
          className={twMerge("text-sm font-normal", properties.classLabel)}
        >
          {label}
        </label>
      )}
      <Select {...props} />
    </div>
  );
};
