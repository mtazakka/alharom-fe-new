"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[4429],{3236:function(e,n,t){var i=t(57829),a=t(42832),s=t(61113),r=t(9019),l=t(90891),o=t(17765),u=t(99527),c=t(46417);n.Z=function(e){var n=e.title,t=e.caption,d=e.directory,p=e.link;return(0,c.jsxs)(i.Z,{sx:{pl:3},children:[(0,c.jsxs)(a.Z,{spacing:1.25,children:[(0,c.jsx)(s.Z,{variant:"h2",children:n}),t&&(0,c.jsx)(s.Z,{variant:"h6",color:"textSecondary",children:t})]}),(0,c.jsxs)(r.ZP,{container:!0,spacing:.75,sx:{mt:1.75},children:[d&&(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsxs)(s.Z,{variant:"caption",color:"textSecondary",children:[(0,c.jsx)(o.Z,{style:{marginRight:10}}),d]})}),p&&(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsxs)(l.Z,{variant:"caption",color:"primary",href:p,target:"_blank",children:[(0,c.jsx)(u.Z,{style:{marginRight:10}}),p]})})]})]})}},34429:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var i=t(9019),a=t(42832),s=t(3236),r=t(7588),l=t(31668),o=t(29439),u=t(1413),c=t(45987),d=t(47313),p=t(57829),m=t(21917),x=t(61113),h=t(78490),g=t(80315),v=t(99881),f=t(24193),Z=t(15914),j=t(46417),S=["children","value","index"],b=["Select campaign settings","Create an ad group","Create an ad"];function y(e){var n=e.children,t=e.value,i=e.index,a=(0,c.Z)(e,S);return(0,j.jsx)("div",(0,u.Z)((0,u.Z)({role:"tabpanel",hidden:t!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},a),{},{children:t===i&&(0,j.jsx)(p.Z,{sx:{p:3},children:n})}))}function k(){var e=(0,d.useState)(0),n=(0,o.Z)(e,2),t=n[0],i=n[1],a=(0,d.useState)(new Set),s=(0,o.Z)(a,2),r=s[0],l=s[1],c=function(e){return 1===e},S=function(e){return r.has(e)};return(0,j.jsx)(Z.Z,{title:"Basic - Linear",codeString:" // HorizontalLinearStepper.tsx\n  <Stepper activeStep={activeStep}>\n    {steps.map((label, index) => {\n      const stepProps = {};\n      const labelProps: {\n        optional?: ReactNode;\n      } = {};\n      if (isStepOptional(index)) {\n        labelProps.optional = <Typography variant=\"caption\">Optional</Typography>;\n      }\n      if (isStepSkipped(index)) {\n        stepProps.completed = false;\n      }\n      return (\n        <Step key={label} {...stepProps}>\n          <StepLabel {...labelProps}>{label}</StepLabel>\n        </Step>\n      );\n    })}\n  </Stepper>\n  {activeStep === steps.length ? (\n    <>\n      <Alert sx={{ my: 3 }}>All steps completed - you&apos;re finished</Alert>\n      <Box sx={{ display: 'flex', flexDirection: 'row' }}>\n        <Box sx={{ flex: '1 1 auto' }} />\n        <Button onClick={handleReset} color=\"error\" variant=\"contained\">\n          Reset\n        </Button>\n      </Box>\n    </>\n  ) : (\n    <>\n      <StepWrapper value={activeStep} index={0}>\n        <Typography>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in\n          laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n          laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat\n          tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus\n          et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu.\n        </Typography>\n      </StepWrapper>\n      <StepWrapper value={activeStep} index={1}>\n        <Typography>\n          Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim\n          vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci\n          id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor,\n          enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu,\n          eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet\n          feugiat ac quis est.\n        </Typography>\n      </StepWrapper>\n      <StepWrapper value={activeStep} index={2}>\n        <Typography>\n          Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis\n          sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin.\n          Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis.\n          Nullam id scelerisque nunc, in ultricies orci.\n        </Typography>\n      </StepWrapper>\n      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>\n        <Button variant=\"outlined\" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>\n          Back\n        </Button>\n        <Box sx={{ flex: '1 1 auto' }} />\n        {isStepOptional(activeStep) && (\n          <Button color=\"error\" onClick={handleSkip} sx={{ mr: 1 }}>\n            Skip\n          </Button>\n        )}\n        <Button onClick={handleNext} variant=\"contained\" color={activeStep === steps.length - 1 ? 'success' : 'primary'}>\n          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}\n        </Button>\n      </Box>\n    </>\n  )}",children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(m.Z,{activeStep:t,children:b.map((function(e,n){var t={},i={};return c(n)&&(i.optional=(0,j.jsx)(x.Z,{variant:"caption",children:"Optional"})),S(n)&&(t.completed=!1),(0,j.jsx)(h.Z,(0,u.Z)((0,u.Z)({},t),{},{children:(0,j.jsx)(g.Z,(0,u.Z)((0,u.Z)({},i),{},{children:e}))}),e)}))}),t===b.length?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.Z,{sx:{my:3},children:"All steps completed - you're finished"}),(0,j.jsxs)(p.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,j.jsx)(p.Z,{sx:{flex:"1 1 auto"}}),(0,j.jsx)(f.Z,{onClick:function(){i(0)},color:"error",variant:"contained",children:"Reset"})]})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{value:t,index:0,children:(0,j.jsx)(x.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu."})}),(0,j.jsx)(y,{value:t,index:1,children:(0,j.jsx)(x.Z,{children:"Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor, enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu, eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet feugiat ac quis est."})}),(0,j.jsx)(y,{value:t,index:2,children:(0,j.jsx)(x.Z,{children:"Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin. Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis. Nullam id scelerisque nunc, in ultricies orci."})}),(0,j.jsxs)(p.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,j.jsx)(f.Z,{variant:"outlined",disabled:0===t,onClick:function(){i((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,j.jsx)(p.Z,{sx:{flex:"1 1 auto"}}),c(t)&&(0,j.jsx)(f.Z,{color:"error",onClick:function(){if(!c(t))throw new Error("You can't skip a step that isn't optional.");i((function(e){return e+1})),l((function(e){var n=new Set(e.values());return n.add(t),n}))},sx:{mr:1},children:"Skip"}),(0,j.jsx)(f.Z,{onClick:function(){var e=r;S(t)&&(e=new Set(e.values())).delete(t),i((function(e){return e+1})),l(e)},variant:"contained",color:t===b.length-1?"success":"primary",children:t===b.length-1?"Finish":"Next"})]})]})]})})}var B=t(98571),C=["children","value","index"],q=["Select campaign settings","Create an ad group","Create an ad"];function w(e){var n=e.children,t=e.value,i=e.index,a=(0,c.Z)(e,C);return(0,j.jsx)("div",(0,u.Z)((0,u.Z)({role:"tabpanel",hidden:t!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},a),{},{children:t===i&&(0,j.jsx)(p.Z,{sx:{p:3},children:n})}))}function N(){var e=(0,d.useState)(0),n=(0,o.Z)(e,2),t=n[0],i=n[1],a=(0,d.useState)({}),s=(0,o.Z)(a,2),r=s[0],l=s[1],u=function(){return q.length},c=function(){return Object.keys(r).length},g=function(){return c()===u()},S=function(){var e=t!==u()-1||g()?t+1:q.findIndex((function(e,n){return!(n in r)}));i(e)};return(0,j.jsxs)(Z.Z,{title:"Non - Linear",codeString:"// HorizontalNonLinearStepper.tsx\n  <Stepper nonLinear activeStep={activeStep}>\n    {steps.map((label, index) => (\n      <Step key={label} completed={completed[index]}>\n        <StepButton color=\"inherit\" onClick={handleStep(index)}>\n          {label}\n        </StepButton>\n      </Step>\n    ))}\n  </Stepper>\n  <div>\n    {allStepsCompleted() ? (\n      <>\n        <Alert sx={{ my: 3 }}>All steps completed - you&apos;re finished</Alert>\n        <Box sx={{ display: 'flex', flexDirection: 'row' }}>\n          <Box sx={{ flex: '1 1 auto' }} />\n          <Button onClick={handleReset} color=\"error\" variant=\"contained\">\n            Reset\n          </Button>\n        </Box>\n      </>\n    ) : (\n      <>\n        <StepWrapper value={activeStep} index={0}>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in\n            laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n            laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat\n            tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus\n            et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu.\n          </Typography>\n        </StepWrapper>\n        <StepWrapper value={activeStep} index={1}>\n          <Typography>\n            Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim\n            vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci\n            id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor,\n            enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu,\n            eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet\n            feugiat ac quis est.\n          </Typography>\n        </StepWrapper>\n        <StepWrapper value={activeStep} index={2}>\n          <Typography>\n            Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis\n            sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin.\n            Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis.\n            Nullam id scelerisque nunc, in ultricies orci.\n          </Typography>\n        </StepWrapper>\n        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>\n          <Button variant=\"outlined\" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>\n            Back\n          </Button>\n          <Box sx={{ flex: '1 1 auto' }} />\n          {activeStep !== steps.length &&\n            (completed[activeStep] ? (\n              <Button color=\"success\">Step {activeStep + 1} already completed</Button>\n            ) : (\n              <Button onClick={handleComplete} color=\"success\" variant={activeStep === totalSteps() - 1 ? 'contained' : 'outlined'}>\n                {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}\n              </Button>\n            ))}\n          <Button disabled={activeStep === steps.length - 1} onClick={handleNext} sx={{ ml: 1 }} variant=\"contained\" color=\"primary\">\n            Next\n          </Button>\n        </Box>\n      </>\n    )}\n  </div>",children:[(0,j.jsx)(m.Z,{nonLinear:!0,activeStep:t,children:q.map((function(e,n){return(0,j.jsx)(h.Z,{completed:r[n],children:(0,j.jsx)(B.Z,{color:"inherit",onClick:(t=n,function(){i(t)}),children:e})},e);var t}))}),(0,j.jsx)("div",{children:g()?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.Z,{sx:{my:3},children:"All steps completed - you're finished"}),(0,j.jsxs)(p.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,j.jsx)(p.Z,{sx:{flex:"1 1 auto"}}),(0,j.jsx)(f.Z,{onClick:function(){i(0),l({})},color:"error",variant:"contained",children:"Reset"})]})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{value:t,index:0,children:(0,j.jsx)(x.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu."})}),(0,j.jsx)(w,{value:t,index:1,children:(0,j.jsx)(x.Z,{children:"Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor, enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu, eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet feugiat ac quis est."})}),(0,j.jsx)(w,{value:t,index:2,children:(0,j.jsx)(x.Z,{children:"Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin. Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis. Nullam id scelerisque nunc, in ultricies orci."})}),(0,j.jsxs)(p.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,j.jsx)(f.Z,{variant:"outlined",disabled:0===t,onClick:function(){i((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,j.jsx)(p.Z,{sx:{flex:"1 1 auto"}}),t!==q.length&&(r[t]?(0,j.jsxs)(f.Z,{color:"success",children:["Step ",t+1," already completed"]}):(0,j.jsx)(f.Z,{onClick:function(){var e=r;e[t]=!0,l(e),S()},color:"success",variant:t===u()-1?"contained":"outlined",children:c()===u()-1?"Finish":"Complete Step"})),(0,j.jsx)(f.Z,{disabled:t===q.length-1,onClick:S,sx:{ml:1},variant:"contained",color:"primary",children:"Next"})]})]})})]})}var P=t(3039),T=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."}];function L(){var e=(0,d.useState)(0),n=(0,o.Z)(e,2),t=n[0],i=n[1],a=function(){return i((function(e){return e+1}))},s=function(){return i((function(e){return e-1}))};return(0,j.jsxs)(Z.Z,{title:"Vertical",codeString:'// VerticalLinearStepper.tsx\n  <Stepper activeStep={activeStep} orientation="vertical">\n    {steps.map((step, index) => (\n      <Step key={step.label}>\n        <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>\n        <StepContent>\n          <Typography>{step.description}</Typography>\n          <Box sx={{ mb: 2 }}>\n            <div>\n              <Button\n                variant="contained"\n                onClick={handleNext}\n                sx={{ mt: 1, mr: 1 }}\n                color={index === steps.length - 1 ? \'success\' : \'primary\'}\n              >\n                {index === steps.length - 1 ? \'Finish\' : \'Continue\'}\n              </Button>\n              <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>\n                Back\n              </Button>\n            </div>\n          </Box>\n        </StepContent>\n      </Step>\n    ))}\n  </Stepper>\n  {activeStep === steps.length && (\n    <Box sx={{ pt: 2 }}>\n      <Typography sx={{ color: \'success.main\' }}>All steps completed - you&apos;re finished</Typography>\n      <Button size="small" variant="contained" color="error" onClick={handleReset} sx={{ mt: 2, mr: 1 }}>\n        Reset\n      </Button>\n    </Box>\n  )}',children:[(0,j.jsx)(m.Z,{activeStep:t,orientation:"vertical",children:T.map((function(e,n){return(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(g.Z,{optional:2===n?(0,j.jsx)(x.Z,{variant:"caption",children:"Last step"}):null,children:e.label}),(0,j.jsxs)(P.Z,{children:[(0,j.jsx)(x.Z,{children:e.description}),(0,j.jsx)(p.Z,{sx:{mb:2},children:(0,j.jsxs)("div",{children:[(0,j.jsx)(f.Z,{variant:"contained",onClick:a,sx:{mt:1,mr:1},color:n===T.length-1?"success":"primary",children:n===T.length-1?"Finish":"Continue"}),(0,j.jsx)(f.Z,{disabled:0===n,onClick:s,sx:{mt:1,mr:1},children:"Back"})]})})]})]},e.label)}))}),t===T.length&&(0,j.jsxs)(p.Z,{sx:{pt:2},children:[(0,j.jsx)(x.Z,{sx:{color:"success.main"},children:"All steps completed - you're finished"}),(0,j.jsx)(f.Z,{size:"small",variant:"contained",color:"error",onClick:function(){return i(0)},sx:{mt:2,mr:1},children:"Reset"})]})]})}var D=t(19860),I=t(70501),R=t(42889),V=t(12547),F=t(40275),O=t(36287),A=t(23495),W=t(5186),z=(0,F.bH)(V.ZP),E=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{label:"Go\u010d, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}];var M=function(){var e=(0,D.Z)(),n=(0,d.useState)(0),t=(0,o.Z)(n,2),i=t[0],a=t[1],s=E.length;return(0,j.jsxs)(Z.Z,{sx:{flexGrow:1},content:!1,codeString:"// CarouselEffectStepper.tsx\n  <Paper\n    square\n    elevation={0}\n    sx={{\n      display: 'flex',\n      alignItems: 'center',\n      height: 50,\n      pl: 2,\n      bgcolor: 'background.paper'\n    }}\n  >\n    <Typography>{images[activeStep].label}</Typography>\n  </Paper>\n  <AutoPlaySwipeableViews\n    axis={theme.direction === ThemeDirection.RTL ? 'x-reverse' : 'x'}\n    index={activeStep}\n    onChangeIndex={handleStepChange}\n    enableMouseEvents\n  >\n    {images.map((step, index) => (\n      <Box key={step.label}>\n        {Math.abs(activeStep - index) <= 2 ? (\n          <Box\n            component=\"img\"\n            sx={{\n              height: 255,\n              display: 'block',\n              overflow: 'hidden',\n              width: '100%'\n            }}\n            src={step.imgPath}\n            alt={step.label}\n          />\n        ) : null}\n      </Box>\n    ))}\n  </AutoPlaySwipeableViews>\n  <MobileStepper\n    sx={{ bgcolor: 'background.paper', '& .anticon': { fontSize: '0.625rem' } }}\n    steps={maxSteps}\n    position=\"static\"\n    activeStep={activeStep}\n    nextButton={\n      <Button\n        size=\"small\"\n        onClick={handleNext}\n        disabled={activeStep === maxSteps - 1}\n        endIcon={theme.direction === ThemeDirection.RTL ? <LeftOutlined /> : <RightOutlined />}\n      >\n        Next\n      </Button>\n    }\n    backButton={\n      <Button\n        size=\"small\"\n        onClick={handleBack}\n        disabled={activeStep === 0}\n        startIcon={theme.direction === ThemeDirection.RTL ? <RightOutlined /> : <LeftOutlined />}\n      >\n        Back\n      </Button>\n    }\n  />",children:[(0,j.jsx)(I.Z,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.paper"},children:(0,j.jsx)(x.Z,{children:E[i].label})}),(0,j.jsx)(z,{axis:e.direction===O.xk.RTL?"x-reverse":"x",index:i,onChangeIndex:function(e){return a(e)},enableMouseEvents:!0,children:E.map((function(e,n){return(0,j.jsx)(p.Z,{children:Math.abs(i-n)<=2?(0,j.jsx)(p.Z,{component:"img",sx:{height:255,display:"block",overflow:"hidden",width:"100%"},src:e.imgPath,alt:e.label}):null},e.label)}))}),(0,j.jsx)(R.Z,{sx:{bgcolor:"background.paper","& .anticon":{fontSize:"0.625rem"}},steps:s,position:"static",activeStep:i,nextButton:(0,j.jsx)(f.Z,{size:"small",onClick:function(){return a((function(e){return e+1}))},disabled:i===s-1,endIcon:e.direction===O.xk.RTL?(0,j.jsx)(A.Z,{}):(0,j.jsx)(W.Z,{}),children:"Next"}),backButton:(0,j.jsx)(f.Z,{size:"small",onClick:function(){return a((function(e){return e-1}))},disabled:0===i,startIcon:e.direction===O.xk.RTL?(0,j.jsx)(W.Z,{}):(0,j.jsx)(A.Z,{}),children:"Back"})})]})},U=function(){return(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(s.Z,{title:"Stepper",caption:"Steppers convey progress through numbered steps. It provides a wizard-like workflow.",directory:"src/pages/components-overview/stepper",link:"https://mui.com/material-ui/react-stepper/"}),(0,j.jsx)(r.Z,{children:(0,j.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,j.jsx)(i.ZP,{item:!0,xs:12,lg:8,children:(0,j.jsxs)(a.Z,{spacing:3,children:[(0,j.jsx)(k,{}),(0,j.jsx)(N,{})]})}),(0,j.jsx)(i.ZP,{item:!0,xs:12,lg:4,children:(0,j.jsxs)(a.Z,{spacing:3,children:[(0,j.jsx)(L,{}),(0,j.jsx)(M,{})]})})]})})]})}},31668:function(e,n,t){var i=t(29439),a=t(47313),s=t(84488),r=t(42832),l=t(57829),o=t(61113),u=t(9019),c=t(15914),d=t(7588),p=t(46417);n.Z=function(e){var n=e.children,t=(0,a.useState)(!0),m=(0,i.Z)(t,2),x=m[0],h=m[1];(0,a.useEffect)((function(){h(!1)}),[]);var g=(0,p.jsx)(c.Z,{title:(0,p.jsx)(s.Z,{sx:{width:{xs:120,md:180}}}),secondary:(0,p.jsx)(s.Z,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,p.jsxs)(r.Z,{spacing:1,children:[(0,p.jsx)(s.Z,{}),(0,p.jsx)(s.Z,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,p.jsx)(s.Z,{}),(0,p.jsx)(s.Z,{})]})});return(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.Z,{sx:{pl:2.5},children:[(0,p.jsxs)(r.Z,{spacing:1.25,children:[(0,p.jsx)(o.Z,{variant:"h2",children:(0,p.jsx)(s.Z,{})}),(0,p.jsx)(o.Z,{variant:"h6",color:"textSecondary",children:(0,p.jsx)(s.Z,{})})]}),(0,p.jsxs)(u.ZP,{container:!0,spacing:.75,sx:{mt:1.75},children:[(0,p.jsx)(u.ZP,{item:!0,xs:12,children:(0,p.jsx)(o.Z,{variant:"caption",color:"textSecondary",children:(0,p.jsxs)(r.Z,{direction:"row",spacing:1,children:[(0,p.jsx)(s.Z,{animation:"wave",variant:"circular",width:16,height:16}),(0,p.jsx)(s.Z,{sx:{width:{xs:250,md:450}}})]})})}),(0,p.jsx)(u.ZP,{item:!0,xs:12,children:(0,p.jsx)(o.Z,{variant:"caption",color:"textSecondary",children:(0,p.jsxs)(r.Z,{direction:"row",spacing:1,children:[(0,p.jsx)(s.Z,{animation:"wave",variant:"circular",width:16,height:16}),(0,p.jsx)(s.Z,{sx:{width:{xs:250,md:450}}})]})})})]})]}),(0,p.jsx)(d.Z,{children:(0,p.jsxs)(u.ZP,{container:!0,spacing:3,children:[(0,p.jsx)(u.ZP,{item:!0,xs:12,md:6,children:g}),(0,p.jsx)(u.ZP,{item:!0,xs:12,md:6,children:g}),(0,p.jsx)(u.ZP,{item:!0,xs:12,md:6,children:g}),(0,p.jsx)(u.ZP,{item:!0,xs:12,md:6,children:g})]})})]}),!x&&n]})}},7588:function(e,n,t){var i=t(4942),a=t(17592),s=t(57829),r=(0,a.ZP)(s.Z)((function(e){var n,t=e.theme;return n={paddingLeft:t.spacing(3),paddingTop:t.spacing(3),marginBottom:t.spacing(3)},(0,i.Z)(n,t.breakpoints.down("md"),{padding:t.spacing(2)}),(0,i.Z)(n,t.breakpoints.down("sm"),{padding:t.spacing(1.5)}),n}));n.Z=r}}]);