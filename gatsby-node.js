exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    sourceUrl: Joi.string()
      .required()
      .description(`The source URL, starting with "fp.", ex: "fp.example.com`)
      .messages({
        "any.required": `"sourceUrl" must be specified and should start with "fp.". Get the correct value from your dashboard under Sources, Setup, CNAME Name.`,
      }),
    writeKey: Joi.string()
      .required()
      .description(`Write Key for your source`)
      .messages({
        "any.required": `"writeKey" must be specified and correspond to the "sourceUrl" specified. Get the correct value from your dashboard under Sources, Key.`,
      }),
  });
};
